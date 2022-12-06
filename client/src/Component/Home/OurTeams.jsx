import React from 'react'
import OurTeamData from  './../../Data/TeamData'
import TeamCard from './TeamCard';


function OurTeams() {
  return (
   <>
   <section className="text-gray-600 body-font" id="ourteam">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>

          <div className="flex flex-wrap flex-row justify-between">
            <div className="p-2 w-full flex flex-row">
              {OurTeamData.map((items) => {
                return (
                  <>
                    <TeamCard
                      username={items.userName}
                      position={items.Postion}
                      image={items.imageurl}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default OurTeams