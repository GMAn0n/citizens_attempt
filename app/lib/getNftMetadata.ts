export const getNftMetadata = async (nft: string, tokenId: number) => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const baseUrl = 'https://base-mainnet.g.alchemy.com/v2/zu5142S7_XOlwr85Ouukhwi0m7Vfz8QD';
  const endpoint = baseUrl + `nft/v3/${process.env.ALCHEMY_ID || 'docs-demo'}/getNFTMetadata`;
  const params = `?contractAddress=${nft}&tokenId=${tokenId}&refreshCache=false`;
  const response = await fetch(endpoint+params, options);
  return await response.json();
}
