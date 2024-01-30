import { NextRequest, NextResponse } from 'next/server';
import { getNftMetadata } from '../../lib/getNftMetadata';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const postUrl = "https:/mu-attempt-cit.vercel.app/api/frame"; 
  const lfghoContractAddress = "0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0";

  const maxSupply = 420;
  const randomTokenId = Math.floor(Math.random() * maxSupply) + 1;

  const nftMetadata = await getNftMetadata(lfghoContractAddress, randomTokenId);

  const nftImageUrl = nftMetadata?.image?.cachedUrl;
  const button02 = nftMetadata?.city;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${nftImageUrl} />
    <meta property="fc:frame:button:1" content="Randomize nft" />
    <meta property="fc:frame:button:2" content="${city}" />
    <meta property="fc:frame:post_url" content=${postUrl} />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
