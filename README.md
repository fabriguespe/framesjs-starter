# Frames.js XMTP starter

## Usage

Once the app is running, you can construct an URL with the following format:

```
http://localhost:3001/?chain={CHAIN}&a={ADDRESS}&c={COUNT}
```

where:

- `{CHAIN}` is the blockchain network, in this case only `base` is supported;
- `{ADDRESS}` is the address of the NFT
- `{COUNT}` is the number of trending mints that you want to display.

## Development

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/fabriguespe/framesjs-starter.git
cd framesjs-starter
# copy env variables template
cp .env.example .env
```

**Set the variables**

```bash
BASE_URL= # frame url
```

```bash
# install dependencies
yarn install

# running the frame
yarn dev
```
