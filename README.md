# 🎒 Stackr Hackerpack

<h4 align="center">
  <a href="https://docs.stf.xyz">Docs</a> |
  <a href="https://stackrlabs.xyz">Website</a>
</h4>

📦 **Stackr Hackerpack** is a collection of tools and libraries to help you build decentralized applications on the Stackr ecosystem. It includes a basic Counter micro-rollup and a companion Next.js frontend to help you get started with your project.

🛠️ Built using Stackr's SDK, NextJS, Privy, Wagmi and Viem.

- :thought_balloon: **Opinionated APIs**: The included micro-rollup has a server exposed with some opinionated endpoints to get started easily.
- :hook: **Frontend hooks**: Hooks that makes it breezy to submit actions to Micro-rollup.
- :closed_lock_with_key: **Embedded Wallet**: We have pre-configured Privy in this example, that can be easily extended to support in-browser wallets as wells as Embedded wallets linked to other identity providers.

## Requirements

Below are the requirements to get started with the pack:

- [Bun](https://bun.sh) - we leverage Bun's bundler to build our micro-rollups.
- [Node (LTS)](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)

## Get Started

To quickly get started, you can clone this repository and follow the steps below:

```bash
npm i

# Update the .env file with your own values
cd web
cp .env.example .env

# Update Micro-rollup .env file with your own values
cd ../counter
cp .env.example .env

cd ..
npm run dev # this start mprocs session for both FE and BE
# OR you can start them separately

# By Default
# Rollup starts on port 3210
# NextJS starts on port 3000
```

## Documentation :book:

Checkout our [docs](https://docs.stf.xyz) to learn more about Micro-rollups, the Stackr ecosystem, and how to get started with new era of decentralized applications.
