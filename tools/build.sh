#!/usr/bin/env bash
set -xe

export DEBIAN_FRONTEND=noninteractive

cd scolastiche
apt-get update
apt-get install -y asymptote texlive-latex-extra texlive-fonts-recommended
yarn install --frozen-lockfile
yarn playwright install-deps chromium
yarn build
