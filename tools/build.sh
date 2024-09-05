#!/usr/bin/env bash
set -xe

export DEBIAN_FRONTEND=noninteractive

cd scolastiche
apt-get update
apt-get install -y asymptote texlive-latex-extra texlive-fonts-recommended libxkbcommon0
yarn install --production --frozen-lockfile
yarn build
mv dist/index.html dist/404.html
