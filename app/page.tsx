import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';


const postUrl = "https://fc-frame-zora-nft-carrousel.app/api/frame"; 
const lfghoContractAddress = "0x45ab4ace5836190fed42800b1c11cb6bdb3b4dc5";

// randomize the tokenID
const maxSupply = 76;
const randomTokenId = Math.floor(Math.random() * maxSupply) + 1;

// fetch nft metadata
const options = {method: 'GET', headers: {accept: 'application/json'}};
const baseUrl = 'https://base-mainnet.g.alchemy.com/';
const endpoint = baseUrl + `nft/v3/${process.env.ALCHEMY_ID || 'docs-demo'}/getNFTMetadata`;
const params = `?contractAddress=${lfghoContractAddress}&tokenId=${randomTokenId}&refreshCache=false`;
const response = await fetch(endpoint+params, options);
const metadata = await response.json();

// build the image url
const nftImageUrl = metadata?.image?.cachedUrl;


const frameMetadata = getFrameMetadata({
  buttons: ['randomize nft'],
  image: nftImageUrl,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: 'nft carrousel',
  description: 'nft carrousel',
  openGraph: {
    title: 'nft carrousel',
    description: 'nft carrousel',
    images: [nftImageUrl],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>this is a farcaster frame displaying an nfts carrousel</h1>
    </>
  );
}
