#!/usr/bin/env bash
set -xe

export DEBIAN_FRONTEND=noninteractive

cd scolastiche
apt-get update
apt-get install -y asymptote texlive-latex-extra texlive-fonts-recommended libxkbcommon0

corepack enable
corepack prepare pnpm@latest --activate

pnpm install --frozen-lockfile
pnpm quizms variants
pnpm build

cp .quizms/hosting-build/index.html .quizms/hosting-build/404.html
