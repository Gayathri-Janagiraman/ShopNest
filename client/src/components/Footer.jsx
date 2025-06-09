function Footer() {
   return (
      <div>
         {/* Footer */}
         <footer className="mt-20 p-6 bg-gray-200 text-sm text-gray-600  ">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">

               <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Electronics</h3>
                  <ul className="space-y-1">
                     <li><a href="/productcategory/camera" className="hover:underline">Cameras</a></li>
                      <li><a href="/productcategory/speaker" className="hover:underline">Speakers</a></li>
                     <li><a href="/productcategory/smartwatches" className="hover:underline">Smart Watches</a></li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Fashion</h3>
                  <ul className="space-y-1">
                     <li><a href="/productcategory/men" className="hover:underline">Men</a></li>
                     <li><a href="/productcategory/women" className="hover:underline">Women</a></li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Home Essentials</h3>
                  <ul className="space-y-1">
                     <li><a href="/productcategory/lamp" className="hover:underline">Lamps</a></li>
                     <li><a href="/productcategory/clock" className="hover:underline">Clocks</a></li>
                     <li><a href="/productcategory/ceramiccups" className="hover:underline">Ceramic Cups</a></li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Info</h3>
                  <ul className="space-y-1">
                     <li className="hover:underline">Terms</li>
                     <li className="hover:underline">Privacy</li>
                     <li className="hover:underline">Help</li>
                  </ul>
               </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
               © {new Date().getFullYear()} ShopNest. All rights reserved.
            </div>
         </footer>
      </div>
   );
}

export default Footer;
