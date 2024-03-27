# Raccolta delle prove della Selezione Scolastica delle Olimpiadi di Informatica e dei Giochi di Fibonacci

## Installazione

1. Installa `yarn`:
   - su Arch Linux: `sudo pacman -S yarn`
   - su macOS: `brew install yarn`
   - su Ubuntu: `sudo apt install yarn`

2. Installa `asymptote`:
   - su Arch Linux: `sudo pacman -S asymptote`
   - su macOS: `brew install asymptote pdf2svg`
   - su Ubuntu: `sudo apt install asymptote`

3. Clona il repository:
   ```shell
   git clone --recurse-submodules https://github.com/olimpiadi-informatica/scolastiche.git
   cd scolastiche
   ```

4. Installa le dipendenze:
   ```shell
   yarn install
   ```

5. Avvia il server di sviluppo:
   ```shell
   yarn dev
   ```
