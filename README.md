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

4. Genera un token di accesso da [qui](https://git.olinfo.it/user/settings/applications):
   - su "Repository and Organization Access" seleziona "Public only";
   - su "Select permissions" seleziona "Read" per "package" e "No access" su tutto il resto.

5. Configurare il package registry:
   ```shell
   npm config set @olinfo:registry https://git.olinfo.it/api/packages/bortoz/npm/
   npm config set -- '//git.olinfo.it/api/packages/bortoz/npm/:_authToken' <il tuo token...>
   ```

6. Installa le dipendenze:
   ```shell
   yarn install
   ```

7. Avvia il server di sviluppo:
   ```shell
   yarn dev
   ```
