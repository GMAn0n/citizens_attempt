import { getFrameMetadata } from '@coinbase/onchainkit';
import { getNftMetadata } from './lib/getNftMetadata';
import type { Metadata } from 'next';


const postUrl = "https://mu-attempt-cit.vercel.app/api/frame"; 
const lfghoContractAddress = "0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0";

// randomize the tokenID
const maxSupply = 420;
const randomTokenId = Math.floor(Math.random() * maxSupply) + 1;

/*
// fetch nft metadata
const options = {method: 'GET', headers: {accept: 'application/json'}};
const Url = 'https://eth-mainnet.g.alchemy.com/';
const endpoint = Url + `nft/v3/${process.env.ALCHEMY_ID || 'docs-demo'}/getNFTMetadata`;
const params = `?contractAddress=${lfghoContractAddress}&tokenId=${randomTokenId}&refreshCache=false?scale.option=fit`;
const response = await fetch(endpoint+params, options);
const nftMetadata = await response.json();
*/

// fetch nft metadata
const nftMetadata = await getNftMetadata(lfghoContractAddress, randomTokenId);

// build the image url
const nftImageUrl = nftMetadata?.image?.cachedUrl;
const button02 = nftMetadata?.city;


const frameMetadata = getFrameMetadata({
  buttons: ['randomize nft'],[{$button2}]
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
