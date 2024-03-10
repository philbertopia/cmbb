import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-5 md:p-24">

      <div className="flex flex-col items-center">
        <div className="md:w-3/4 text-">
          <h2 className="text-3xl text-center md:text-4xl text-purple-800 font-bold">Cash Money Blimp Boys</h2>
          <p className="text-xl mt-10 mb-20 text-center text-zinc-700">All Aboard the Cash Money Blimp.</p>
        </div>

        <div className="md:w-1/4">
        <Image
          src="/cmbb-logo.png"
          alt="Cash Money Blimp Boys Meme Token (Polygon Matic)"
          width={500} 
          height={300} 
          className="border-8 rounded-full"
          />
        </div>
      </div>

      <div className="flex mt-10 gap-4">
          <Link href="/">
              <Image src="/github.png" alt="" width={50} height={50} />
          </Link>
          <Link href="/">
              <Image src="/dribbble.png" alt="" width={50} height={50} />
          </Link>
          <Link href="/">
              <Image src="/instagram.png" alt="" width={50} height={50} />
          </Link>
      </div>

      

      <h1 className="mt-24 mb-5 font-bold text-purple-800 text-4xl">$CMBB</h1>
      <div className="flex flex-col-reverse items-center mb-24 gap-8"> 
        <div>
          <Image 
            src="/polygon-matic.png" 
            alt="Polygon Matic" 
            width={200} 
            height={200} 
            style={{ transform: 'scaleX(-1)' }} 
          />
        </div>
        <div className="px-8">
          <Card className="bg-gradient-to-b from-purple-200 to-pink-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Tokenomics</CardTitle>
              <CardDescription>Polygon (Matic)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contract Address:</p>
              <p className="text-xs">0x1c184e0c2ff738e85efc234b34a46c6c3e9c2f04</p>
            </CardContent>
            <CardContent>
              <p>Total Supply: 10,000,000,000</p>
              <p>Airdrop: 70%</p>
              <p>Liquidity Pool: 20%</p>
              <p>Treasury: 10%</p>
            </CardContent>

            <div className="flex mt-5 justify-center mb-10 gap-4">
              <Link href="/">
                  <Image src="/github.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/dribbble.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/instagram.png" alt="" width={25} height={25} />
              </Link>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center mb-24 md:py-24">
        <div>
          <h1 className="text-4xl mb-14 text-purple-800 font-bold">Road Map</h1>
        </div>
        <div className="flex flex-col gap-20">
          <Card className="bg-gradient-to-b from-purple-200 to-pink-200">
            <div className="h-10 flex justify-center items-center">
              <div  
                className="flex relative justify-center items-center"
                style={{ top: '-10px' }}
                >
                <Image 
                  src="/Community-128x128.png" 
                  width={100} height={100}
                  alt="Community"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>Phase 1: Soaring High with Community</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Strap in, Blimp Fam! Phase 1 focuses on building our community. We&apos;re talkin&apos; airdrops, social media takeovers, and spreading the $CMBB word like confetti at a billionaire&apos;s bash.</p>
            </CardContent>
            <div className="flex mt-5 justify-center mb-10 gap-4">
              <Link href="/">
                  <Image src="/github.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/dribbble.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/instagram.png" alt="" width={25} height={25} />
              </Link>
            </div>
          </Card>
          <Card className="bg-gradient-to-b from-purple-200 to-pink-200">
            <div className="h-10 flex justify-center items-center">
                <div  
                  className="flex relative justify-center items-center"
                  style={{ top: '-10px' }}
                  >
                  <Image 
                    src="/perspective_matte-331-128x128.png" 
                    width={100} height={100}
                    alt="Presale"
                  />
                </div>
              </div>
            <CardHeader>
              <CardTitle>Presale</CardTitle>
              <CardDescription>Phase 2: Fueling the Blimp</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get your wallets ready! Phase 2 features two presale rounds to fill our liquidity pool and launch us towards the moon (or at least a really nice cloud).</p>
            </CardContent>
            <div className="flex mt-5 justify-center mb-10 gap-4">
              <Link href="/">
                  <Image src="/github.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/dribbble.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/instagram.png" alt="" width={25} height={25} />
              </Link>
            </div>
          </Card>
          <Card className="bg-gradient-to-b from-purple-200 to-pink-200">
            <div className="h-10 flex justify-center items-center">
                <div  
                  className="flex relative justify-center items-center"
                  style={{ top: '-10px' }}
                  >
                  <Image 
                    src="/perspective_matte-347-128x128.png" 
                    width={100} height={100}
                    alt="Liquidity Pool"
                  />
                </div>
              </div>
            <CardHeader>
              <CardTitle>Liquidity</CardTitle>
              <CardDescription>Phase 3: Setting Sail (Liquidity & Listings)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Brace yourselves for liftoff! Phase 3 sees $CMBB land on a major crypto exchange, making it smooth sailing for anyone to buy and trade our token. Hold on tight, because after this, it&apos;s moon time!</p>
            </CardContent>
            <div className="flex mt-5 justify-center mb-10 gap-4">
              <Link href="/">
                  <Image src="/github.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/dribbble.png" alt="" width={25} height={25} />
              </Link>
              <Link href="/">
                  <Image src="/instagram.png" alt="" width={25} height={25} />
              </Link>
            </div>
          </Card>
        </div>
      </div>

      <div className="mb-5">
        <Image 
          src="/purple-crypto.jpg" 
          alt="Gentlemen bowing to CMBB" 
          width={600}
          height={500}
          className="rounded-lg"
        />
      </div>

      <div className="mb-24">
        <p className="text-purple-800 font-bold mb-3">Ditch the Lambo, We&apos;re Taking a Blimp to the Moon!</p>
        <p className="text-zinc-700 mb-5">Forget those boring old cryptocurrencies promising fancy cars and vague promises of a better future. $CMBB isn&apos;t about that. $CMBB is about the finer things in life. Like luxury blimps. And caviar. And maybe even solid gold toilets (we&apos;re still working on the budget).</p>
        <p className="text-purple-800 font-bold mb-3">Why $CMBB? Because Why Not?</p>
        <p className="text-zinc-700 mb-3">Look, there&apos;s a good chance this whole thing is a massive joke. But hey, isn&apos;t that the beauty of cryptocurrency?  Who needs real-world use cases or a functioning product when you can speculate on the dreams of internet strangers?</p>
        <p className="text-zinc-700 mb-5">Think of it like this: Buying $CMBB is like buying a lottery ticket, except with a much higher chance of winning... a one-way trip to Clown Town. But on the off chance it takes off? Well, then you&apos;ll be laughing all the way to the blimp hangar, champagne flute in hand.</p>
        
        <div className="mb-5">
          <Image 
            src="/puple-lambo-blimp.jpg" 
            alt="Gentlemen bowing to CMBB" 
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>

        <p className="text-zinc-700 mb-5"><span className="text-purple-800 font-bold">Just to be clear (refer to our disclaimer for all the legalese)</span>, we are not financial advisors and this is not financial advice.  In fact, it&apos;s the opposite of financial advice.  Please don&apos;t buy $CMBB with your rent money.  Unless you like ramen noodles and sleeping on park benches.  Then by all means, go for it. But hey, at least you&apos;ll have a story to tell your grandkids (assuming they&apos;re not too busy scavenging for bottle caps in the post-apocalyptic wasteland).**</p>

      </div>

      <div className="mb-24">
        <Image 
          src="/puple buisness.jpg" 
          alt="Gentlemen praising $CMBB" 
          width={600}
          height={500}
          className="rounded-lg"
        />
      </div>

      <div className="mb-24">
        <p className="text-purple-800 font-bold mb-5 text-xl">**Legalese</p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">Disclaimer:</span></p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">This is not financial advice:</span>The information provided on this website is for entertainment purposes only and should not be considered as investment or financial advice.</p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">Do your own research:</span> You are solely responsible for conducting your own research before making any investment decisions. Cryptocurrency investments are highly speculative and involve substantial risk.</p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">Potential for loss:</span> You may lose some or all of your invested capital.</p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">No guarantees:</span> We do not guarantee the accuracy or completeness of any information presented on this website.</p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">Not affiliated with investment professionals:</span>We are not registered investment advisors or brokers and do not provide personalized investment services.</p>

        <p className="text-zinc-700 mb-3"><span className="font-bold">Hold us harmless:</span> By using this website, you agree to hold us harmless for any losses or damages you may incur as a result of your investment decisions.</p>
      </div>

    </main>
  );
}
