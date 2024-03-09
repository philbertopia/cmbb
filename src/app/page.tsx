import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">

      <div className="flex items-center">
        <div className="w-3/4 ">
          <h2 className="text-4xl text-purple-800 font-bold">Cash Money Blimp Boys</h2>
          <p className="text-xl mt-10">All Aboard the Cash Money Blimp</p>
        </div>

        <div className="w-1/4">
        <Image
          src="/cmbb-logo.png"
          alt="Cash Money Blimp Boys Meme Token (Polygon Matic)"
          width={500} // Optional: Set width
          height={300} // Optional: Set height
          />
        </div>
      </div>

      <div className="mt-24">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cupiditate doloribus rerum nostrum molestias necessitatibus dignissimos velit quisquam recusandae qui voluptate ullam id quam, ratione dolorem ut optio sint exercitationem.</p>
      </div>

      <h1 className="mt-24 mb-5 font-bold text-purple-800 text-4xl">$CMBB</h1>
      <div className="flex items-center mb-24 gap-8">
        
        <div>
          <Image src="/polygon-matic.png" alt="Polygon Matic" width={200} height={200} style={{ transform: 'scaleX(-1)' }} />
        </div>
        <div>
          <Card className="bg-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Tokenomics</CardTitle>
              <CardDescription>Polygon (Matic)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contract Address:</p>
              <p>0x1c184e0c2ff738e85efc234b34a46c6c3e9c2f04</p>
            </CardContent>
            <CardContent>
              <p>Total Supply: 10,000,000,000</p>
              <p>Airdrop: 70%</p>
              <p>Liquidity Pool: 20%</p>
              <p>Treasury: 10%</p>
            </CardContent>
            
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center py-24">
        <div>
          <h1 className="text-4xl mb-24 text-purple-800 font-bold">Road Map</h1>
        </div>
        <div className="flex gap-8">
          <Card className="bg-purple-200">
            <div className="h-10 flex justify-center items-center">
              <div  
                className="flex relative justify-center items-center"
                style={{ top: '-30px' }}
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
              <CardDescription>Phase 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-200">
            <div className="h-10 flex justify-center items-center">
                <div  
                  className="flex relative justify-center items-center"
                  style={{ top: '-30px' }}
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
              <CardDescription>Phase 2</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-200">
            <div className="h-10 flex justify-center items-center">
                <div  
                  className="flex relative justify-center items-center"
                  style={{ top: '-30px' }}
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
              <CardDescription>Phase 3</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <Image 
          src="/cmbb-bow.jpg" 
          alt="Gentlemen bowing to CMBB" 
          width={600}
          height={500}
          className="rounded-lg"
        />
      </div>

      

    </main>
  );
}
