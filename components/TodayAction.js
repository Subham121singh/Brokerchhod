
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function TodayAction() {
  return (
    <form>
      <div className="space-y-12">
      

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            What is your purpose of visit today?
          </h2>
        

          <div className="mt-10">
            <div className="sm:col-span-3">
            <input id="published" class="peer/published" type="radio" name="status" />
            <label for="published" class="ml-2 peer-checked/published:text-sky-500">I am looking for a new place to rent</label>
              
               
             
            </div>

            <div className="mt-5">
            <input id="published" class="peer/published" type="radio" name="status" />
            <label for="published" class="ml-2 peer-checked/published:text-sky-500">I would like to help someone else by listing my current place</label>
              
               
             
            </div>

           

           
           

          
          


          

        
           
          </div>
        </div>

       
      </div>

    
    </form>
  );
}
