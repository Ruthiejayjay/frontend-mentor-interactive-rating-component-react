import { useState } from "react";

export function Rating() {
    const [selectedRating, setSelectedRating] = useState<number>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleRatingClicked(rating: number) {
        setSelectedRating(rating);
    }

    function handleFormSubmitted(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitted(true)
    }

    return isSubmitted ? (
        <div className="text-white">
            Thank You
        </div>
    ) : (
            <div className="w-[412px] h-[24rem] bg-dark-blue rounded-2xl">
                <form onSubmit={handleFormSubmitted} className="p-8 flex flex-col justify-start items-start gap-8 font-Overpass">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 bg-medium-grey">
                        <img src="/icon-star.svg" className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                        <h3 className="text-white font-bold text-xl leading-[2.216rem]">How did we do?</h3>
                        <p className="w-[340px] text-left text-light-grey text-[0.93rem]">Please let us know how we did with your support request.
                            All feedback is
                            appreciated to help us improve our offering!
                        </p>
                    </div>
                    <div className="grid grid-cols-5 w-[21.3rem]">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button type="button" onClick={() => handleRatingClicked(rating)} className=" w-[3.188rem] 
                    h-[3.188rem] 
                    flex 
                    justify-center 
                    items-center 
                    rounded-full
                   text-light-grey
                   cursor-pointer 
                   bg-medium-grey
                   hover:bg-light-grey
                   hover:text-white
                   focus:bg-orange
                   focus:text-white">{rating}</button>
                        ))}

                    </div>
                    <button disabled={selectedRating === undefined} className="w-[21.313rem] h-[2.813rem] uppercase font-bold bg-orange text-white cursor-pointer hover:text-orange hover:bg-white rounded-3xl">
                        Submit
                    </button>
                </form>
            </div>
        )
}