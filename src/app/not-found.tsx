import React from 'react'
import '../styles/error-page.css'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <section className="flex items-center justify-center h-screen mx-auto ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg  ">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you&apos;re lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Button className="bg-green-700">Go to Home</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
