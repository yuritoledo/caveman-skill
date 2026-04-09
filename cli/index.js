#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { readFileSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const AGENTS = [
  { name: 'qwen-code', path: '.qwen/skills/caveman', detect: '.qwen' },
  { name: 'claude-code', path: '.claude/skills/caveman', detect: '.claude' },
  { name: 'cursor', path: '.cursor/skills/caveman', detect: '.cursor' },
  { name: 'windsurf', path: '.windsurf/skills/caveman', detect: '.windsurf' },
  { name: 'cline', path: '.cline/skills/caveman', detect: '.cline' },
];

function findProjectRoot(startDir) {
  let dir = startDir;
  while (dir !== '/') {
    if (existsSync(join(dir, 'package.json')) || existsSync(join(dir, '.git'))) {
      return dir;
    }
    dir = dirname(dir);
  }
  return null;
}

function detectAgent(projectRoot) {
  return AGENTS.filter((a) => existsSync(join(projectRoot, a.detect)));
}

function installSkill(agent, projectRoot) {
  const skillDir = join(projectRoot, agent.path);
  const sourceSkill = join(__dirname, '..', 'SKILL.md');

  mkdirSync(skillDir, { recursive: true });
  copyFileSync(sourceSkill, join(skillDir, 'SKILL.md'));

  console.log(`🪨 Caveman skill installed for ${agent.name} → ${agent.path}/SKILL.md`);
}

function listAgents(agents) {
  console.log('\nDetected agents:');
  agents.forEach((a, i) => console.log(`  ${i + 1}. ${a.name}`));
}

async function main() {
  const args = process.argv.slice(2);
  const agentFlag = args.find((a) => a.startsWith('--agent='));
  const agentName = agentFlag?.split('=')[1];

  const projectRoot = findProjectRoot(process.cwd());
  if (!projectRoot) {
    console.error('Error: not inside a project directory');
    process.exit(1);
  }

  if (agentName) {
    const agent = AGENTS.find((a) => a.name === agentName);
    if (!agent) {
      console.error(`Unknown agent: ${agentName}. Available: ${AGENTS.map((a) => a.name).join(', ')}`);
      process.exit(1);
    }
    installSkill(agent, projectRoot);
    return;
  }

  const detected = detectAgent(projectRoot);

  if (detected.length === 0) {
    console.log('No agents detected. Installing for Qwen Code (default).');
    installSkill(AGENTS[0], projectRoot);
    return;
  }

  if (detected.length === 1) {
    installSkill(detected[0], projectRoot);
    return;
  }

  listAgents(detected);
  console.log('\nPick agent (number):');

  const readline = await import('node:readline/promises');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question('> ');
  rl.close();

  const idx = parseInt(answer) - 1;
  if (idx >= 0 && idx < detected.length) {
    installSkill(detected[idx], projectRoot);
  } else {
    console.error('Invalid selection');
    process.exit(1);
  }
}

main();
