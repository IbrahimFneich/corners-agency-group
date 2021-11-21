import "../components/WordAnimation.css"
import {useRef,useEffect} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { TweenMax , Power3,gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".mainText",{
      scrollTrigger:{
        trigger : ".mainText",
        start: "top top",
        markers:true,
        scrub:true,
        toggleActions: "restart pause reverse none"
      },
      x:100,
      duration:2
    })
  },[]);



  return (
    <div>
      <div className="mainText">
      <center>
        <span>
        <p class="font-lora text-9xl " >We make </p>
        <svg id="logo" width="232" height="47" viewBox="0 0 232 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.48 16.38C35.08 12.62 33.76 9.69999 31.52 7.61999C29.32 5.53999 26.48 4.49999 23 4.49999C20.16 4.49999 17.58 5.29999 15.26 6.89999C12.94 8.45999 11.08 10.68 9.68001 13.56C8.32001 16.44 7.64001 19.84 7.64001 23.76C7.64001 27.52 8.36001 30.84 9.80001 33.72C11.24 36.6 13.18 38.84 15.62 40.44C18.06 42.04 20.76 42.84 23.72 42.84C26.32 42.84 28.88 42.26 31.4 41.1C33.92 39.9 35.98 38.18 37.58 35.94L39.14 37.2C37.42 39.56 35.56 41.38 33.56 42.66C31.56 43.94 29.56 44.8 27.56 45.24C25.6 45.72 23.8 45.96 22.16 45.96C19.16 45.96 16.4 45.42 13.88 44.34C11.4 43.26 9.24001 41.76 7.40001 39.84C5.60001 37.88 4.20001 35.62 3.20001 33.06C2.24001 30.46 1.76001 27.66 1.76001 24.66C1.76001 21.82 2.18001 19.06 3.02001 16.38C3.90001 13.7 5.20001 11.28 6.92001 9.11999C8.64001 6.95999 10.8 5.23999 13.4 3.95999C16.04 2.67999 19.1 2.03999 22.58 2.03999C26.98 2.03999 31.02 3.25999 34.7 5.69999L34.4 2.45999H37.64V16.38H35.48Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M43.5931 43.2C44.8331 43.2 45.6931 42.9 46.1731 42.3C46.6531 41.66 46.9331 40.8 47.0131 39.72C47.0931 38.6 47.1331 37.32 47.1331 35.88V22.2C47.1331 21.56 47.1331 20.92 47.1331 20.28C47.1731 19.64 47.2531 18.98 47.3731 18.3C46.6531 18.34 45.9331 18.38 45.2131 18.42C44.5331 18.42 43.8331 18.44 43.1131 18.48V16.02H44.9731C46.6931 16.02 47.8731 15.86 48.5131 15.54C49.1931 15.18 49.7531 14.8 50.1931 14.4H51.9331C52.0131 15.04 52.0731 15.84 52.1131 16.8C52.1531 17.72 52.1931 18.9 52.2331 20.34C52.8331 19.34 53.6531 18.36 54.6931 17.4C55.7331 16.44 56.8931 15.64 58.1731 15C59.4931 14.36 60.8731 14.04 62.3131 14.04C63.4331 14.04 64.4131 14.34 65.2531 14.94C66.0931 15.54 66.5131 16.5 66.5131 17.82C66.5131 18.34 66.2731 18.96 65.7931 19.68C65.3531 20.4 64.5931 20.74 63.5131 20.7C62.6331 20.66 61.9331 20.32 61.4131 19.68C60.8931 19 60.6931 18.22 60.8131 17.34C59.2931 17.26 57.7531 17.84 56.1931 19.08C54.6331 20.32 53.3331 21.92 52.2931 23.88L52.3531 38.64C52.3531 39.44 52.3331 40.16 52.2931 40.8C52.2931 41.4 52.2331 42.04 52.1131 42.72C52.7531 42.68 53.3731 42.66 53.9731 42.66C54.6131 42.62 55.2531 42.58 55.8931 42.54V45H43.5931V43.2Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M83.66 45.96C80.9 45.96 78.4 45.32 76.16 44.04C73.96 42.72 72.22 40.88 70.94 38.52C69.66 36.12 69.02 33.3 69.02 30.06C69.02 27.26 69.64 24.64 70.88 22.2C72.16 19.76 73.94 17.8 76.22 16.32C78.5 14.8 81.14 14.04 84.14 14.04C86.38 14.04 88.42 14.52 90.26 15.48C92.1 16.44 93.56 17.9 94.64 19.86C95.76 21.82 96.32 24.3 96.32 27.3L75.2 27.66C75.16 32.26 75.92 35.96 77.48 38.76C79.04 41.52 81.58 42.9 85.1 42.9C86.34 42.9 87.6 42.68 88.88 42.24C90.2 41.8 91.42 41.2 92.54 40.44C93.66 39.68 94.56 38.84 95.24 37.92L96.68 39.12C95.6 40.8 94.3 42.14 92.78 43.14C91.26 44.14 89.7 44.86 88.1 45.3C86.5 45.74 85.02 45.96 83.66 45.96ZM75.38 25.14H90.68C90.68 23.7 90.46 22.32 90.02 21C89.62 19.64 88.94 18.54 87.98 17.7C87.02 16.82 85.76 16.38 84.2 16.38C81.88 16.38 79.94 17.08 78.38 18.48C76.86 19.84 75.86 22.06 75.38 25.14Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M119.782 45C119.662 44.32 119.582 43.72 119.542 43.2C119.502 42.68 119.442 42.14 119.362 41.58C118.002 42.94 116.522 44.02 114.922 44.82C113.362 45.58 111.702 45.96 109.942 45.96C106.902 45.96 104.642 45.28 103.162 43.92C101.682 42.52 100.942 40.82 100.942 38.82C100.942 36.98 101.502 35.4 102.622 34.08C103.782 32.72 105.262 31.62 107.062 30.78C108.902 29.9 110.882 29.26 113.002 28.86C115.162 28.42 117.242 28.22 119.242 28.26V24.54C119.242 23.14 119.122 21.82 118.882 20.58C118.642 19.34 118.122 18.32 117.322 17.52C116.522 16.72 115.242 16.3 113.482 16.26C112.322 16.22 111.122 16.44 109.882 16.92C108.682 17.4 107.802 18.22 107.242 19.38C107.562 19.7 107.762 20.08 107.842 20.52C107.962 20.92 108.022 21.3 108.022 21.66C108.022 22.14 107.822 22.7 107.422 23.34C107.022 23.94 106.322 24.22 105.322 24.18C104.482 24.18 103.842 23.9 103.402 23.34C102.962 22.74 102.742 22.04 102.742 21.24C102.742 19.88 103.242 18.66 104.242 17.58C105.282 16.5 106.702 15.64 108.502 15C110.302 14.36 112.342 14.04 114.622 14.04C117.982 14.04 120.462 14.94 122.062 16.74C123.662 18.5 124.442 21.3 124.402 25.14C124.402 27.38 124.382 29.64 124.342 31.92C124.342 34.16 124.342 36.4 124.342 38.64C124.342 39.28 124.322 39.92 124.282 40.56C124.242 41.2 124.182 41.92 124.102 42.72C124.822 42.68 125.522 42.64 126.202 42.6C126.922 42.56 127.642 42.52 128.362 42.48V45H119.782ZM119.242 30.3C117.882 30.34 116.442 30.52 114.922 30.84C113.442 31.12 112.062 31.56 110.782 32.16C109.542 32.76 108.522 33.56 107.722 34.56C106.962 35.52 106.602 36.7 106.642 38.1C106.722 39.58 107.202 40.7 108.082 41.46C109.002 42.18 110.082 42.54 111.322 42.54C112.962 42.54 114.382 42.24 115.582 41.64C116.822 41 118.042 40.12 119.242 39C119.202 38.56 119.182 38.08 119.182 37.56C119.182 37.04 119.182 36.5 119.182 35.94C119.182 35.74 119.182 35.1 119.182 34.02C119.222 32.94 119.242 31.7 119.242 30.3Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M143.35 45.96C142.43 45.96 141.49 45.82 140.53 45.54C139.57 45.3 138.67 44.8 137.83 44.04C137.03 43.28 136.39 42.18 135.91 40.74C135.43 39.26 135.19 37.32 135.19 34.92L135.31 17.52L130.69 17.58V15C131.73 14.96 132.79 14.58 133.87 13.86C134.95 13.1 135.91 12.08 136.75 10.8C137.63 9.51999 138.23 8.11999 138.55 6.59999H140.59V15H150.67V17.34L140.59 17.46L140.47 34.14C140.47 36.86 140.81 38.94 141.49 40.38C142.21 41.82 143.39 42.54 145.03 42.54C146.15 42.54 147.19 42.22 148.15 41.58C149.15 40.94 150.03 40.06 150.79 38.94L152.41 40.26C151.25 42.02 150.09 43.3 148.93 44.1C147.81 44.9 146.77 45.4 145.81 45.6C144.85 45.84 144.03 45.96 143.35 45.96Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M155.273 43.2C156.513 43.2 157.373 42.9 157.853 42.3C158.333 41.66 158.613 40.8 158.693 39.72C158.773 38.6 158.813 37.32 158.813 35.88V22.2C158.813 21.56 158.833 20.96 158.873 20.4C158.913 19.8 158.973 19.1 159.053 18.3C158.333 18.34 157.613 18.38 156.893 18.42C156.213 18.46 155.513 18.5 154.793 18.54V16.02C156.553 16.02 157.913 15.94 158.873 15.78C159.833 15.62 160.553 15.42 161.033 15.18C161.553 14.94 161.953 14.68 162.233 14.4H163.973V38.64C163.973 39.44 163.953 40.16 163.913 40.8C163.913 41.4 163.853 42.04 163.733 42.72C164.373 42.68 164.993 42.66 165.593 42.66C166.233 42.62 166.873 42.58 167.513 42.54V45H155.273V43.2ZM161.093 8.45999C160.253 8.45999 159.513 8.11999 158.873 7.43999C158.233 6.75999 157.913 5.91999 157.913 4.91999C157.913 3.91999 158.233 3.07999 158.873 2.39999C159.553 1.67999 160.313 1.31999 161.153 1.31999C162.073 1.31999 162.833 1.67999 163.433 2.39999C164.073 3.07999 164.393 3.91999 164.393 4.91999C164.393 5.91999 164.053 6.75999 163.373 7.43999C162.733 8.11999 161.973 8.45999 161.093 8.45999Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M183.548 45.18L174.968 25.62C173.968 23.34 173.308 21.56 172.988 20.28C172.668 18.96 172.488 17.96 172.448 17.28L169.868 17.46V15H180.908V16.8C179.708 16.8 178.928 17.12 178.568 17.76C178.248 18.36 178.208 19.18 178.448 20.22C178.688 21.22 179.048 22.3 179.528 23.46L184.148 34.02C184.468 34.7 184.768 35.42 185.048 36.18C185.368 36.9 185.668 37.66 185.948 38.46H186.008C186.208 37.86 186.428 37.22 186.668 36.54C186.948 35.86 187.188 35.2 187.388 34.56L192.188 21.42C192.508 20.46 192.848 19.62 193.208 18.9C193.568 18.18 193.828 17.64 193.988 17.28L190.148 17.46V15H199.628V16.8C198.308 16.8 197.268 17.48 196.508 18.84C195.748 20.16 194.848 22.18 193.808 24.9L185.948 45.18H183.548Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
          <path d="M216.668 45.96C213.908 45.96 211.408 45.32 209.168 44.04C206.968 42.72 205.228 40.88 203.948 38.52C202.668 36.12 202.028 33.3 202.028 30.06C202.028 27.26 202.648 24.64 203.888 22.2C205.168 19.76 206.948 17.8 209.228 16.32C211.508 14.8 214.148 14.04 217.148 14.04C219.388 14.04 221.428 14.52 223.268 15.48C225.108 16.44 226.568 17.9 227.648 19.86C228.768 21.82 229.328 24.3 229.328 27.3L208.208 27.66C208.168 32.26 208.928 35.96 210.488 38.76C212.048 41.52 214.588 42.9 218.108 42.9C219.348 42.9 220.608 42.68 221.888 42.24C223.208 41.8 224.428 41.2 225.548 40.44C226.668 39.68 227.568 38.84 228.248 37.92L229.688 39.12C228.608 40.8 227.308 42.14 225.788 43.14C224.268 44.14 222.708 44.86 221.108 45.3C219.508 45.74 218.028 45.96 216.668 45.96ZM208.388 25.14H223.688C223.688 23.7 223.468 22.32 223.028 21C222.628 19.64 221.948 18.54 220.988 17.7C220.028 16.82 218.768 16.38 217.208 16.38C214.888 16.38 212.948 17.08 211.388 18.48C209.868 19.84 208.868 22.06 208.388 25.14Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_6_13)"/>
        </svg> 
        </span>
         
    
    
                <p class="font-lora text-9xl " >Things, Everyday.</p>
      </center>
            
      </div>


    </div>

  )
}
