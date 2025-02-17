export const getNftMetadata = async (nft: string, tokenId: number) => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const Url = 'https://eth-mainnet.g.alchemy.com/';
  const endpoint = Url + `nft/v3/${process.env.ALCHEMY_ID || 'docs-demo'}/getNFTMetadata`;
  const params = `?contractAddress=${nft}&tokenId=${tokenId}&refreshCache=false`;
  const response = await fetch(endpoint+params, options);
  return await response.json();
}
