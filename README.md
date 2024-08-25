# 🎒 Stackr Hackerpack

<h4 align="center">
  <a href="https://docs.stf.xyz">Docs</a> |
  <a href="https://github.com/stackrlabs/hackerpack">GitHub</a> |
  <a href="https://stackrlabs.xyz">Website</a>
</h4>

📦 **Stackr Hackerpack** is a collection of tools and libraries to help you build decentralized applications on the Stackr ecosystem. It includes a basic Counter micro-rollup and a companion Next.js frontend to help you get started with your project.

🛠️ Built using Stackr's SDK, NextJS, Privy, Wagmi and Viem.

- 💭 **Opinionated APIs**: The included micro-rollup has a server exposed with some opinionated endpoints to get started easily.
- 🪝 **Frontend hooks**: Hooks that makes it breezy to submit actions to Micro-rollup.
- 🔐 **Embedded Wallet**: We have pre-configured Privy in this example, that can be easily extended to support in-browser wallets as wells as Embedded wallets linked to other identity providers.

## Requirements

Below are the requirements to get started with the pack:

- [Bun](https://bun.sh) - we leverage Bun's bundler to build our micro-rollups.
- [Node (LTS)](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)

## Get Started

To quickly get started, you can clone this repository and follow the steps below:

1. Clone the repository

```bash
git clone git@github.com:stackrlabs/hackerpack.git
# OR if you want to clone particular branch, use command like below
git clone -b <branch> git@github.com:stackrlabs/hackerpack.git
```

2. Initialize the project by running the setup script

```bash
cd hackerpack
./setup.sh
```

3. Run the project with `mprocs`

```bash
bun dev
```

This sets up the micro-rollup and the web app to run concurrently. You can now visit `http://localhost:3000` to see the web app in action and interact with the rollup by sending actions.

By default
Rollup runs on port `3210`
Web App runs on port `3000`

> [!CAUTION]
> The project comes initialized with a default private key and Privy appId. It is strongly recommended to replace these with your own values in `counter/.env` and `web/.env` files respectively before deploying your application.

## Documentation 📕

Checkout our [docs](https://docs.stf.xyz) to learn more about Micro-rollups, the Stackr ecosystem, and how to get started with new era of decentralized applications.

## Wallet Setups ⚙️

This repo has been setup with [Privy](https://www.privy.io/), and we have included three modes of wallet setups:
<table>
  <thead>
    <tr>
      <th>Mode</th>
      <th>Description</th>
      <th>Branch</th>
      <th>Deployment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Embedded Wallet with Custodial wallet Auth</td>
      <td>Uses Privy's embedded wallet to sign transactions (signing pop-up can be suppressed)</td>
      <td><a href="https://github.com/stackrlabs/hackerpack/" target="_blank">main</a></td>
      <td><a href="https://main.hackerpack.stf.xyz" target="_blank">Try it</a></td>
    </tr>
    <tr>
      <td>Embedded Wallet with Social/Email Auth</td>
      <td>Uses Privy's embedded wallet to sign transactions (signing pop-up can be suppressed)</td>
      <td><a href="https://github.com/stackrlabs/hackerpack/tree/social" target="_blank">social</a></td>
      <td><a href="https://social.hackerpack.stf.xyz" target="_blank">Try it</a></td>
    </tr>
    <tr>
      <td>Using Custodial wallet</td>
      <td>Uses your wallet to sign transactions (requires pop-up)</td>
      <td><a href="https://github.com/stackrlabs/hackerpack/tree/custodial" target="_blank">custodial</a></td>
      <td><a href="https://custodial.hackerpack.stf.xyz" target="_blank">Try it</a></td>
    </tr>
  </tbody>
</table>

## Hosting ☁️

- Frontend: You can deploy the NextJS application to Vercel, Netify, [GitHub Pages](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/) or even other providers like [AWS Amplify](https://aws.amazon.com/amplify/) etc.

- Micro-rollup: We have extensive guide [here](https://docs.stf.xyz/build/guides/hosting)

## More Micro-rollups 🤝

Refer to the [awesome-micro-rollups](https://github.com/aashutoshrathi/awesome-micro-rollups) for a curated list of applications leveraging Micro-rollups.

For more information, you can reach out to us on our [Discord](https://discord.stackrlabs.xyz/).
