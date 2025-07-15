import React from "react";
import Image from "next/image";

const WorkoutLibrarySection = () => {
  const workouts = [
    {
      id: 1,
      title: "Back Workout",
      isNew: true,
      duration: "10 Total",
      reps: "30 X Reps Each",
      image: "/back-workout.png",
    },
    {
      id: 2,
      title: "Pull Ups",
      isNew: false,
      duration: "4 Sets",
      reps: "20 X Reps Each",
      image: "/pull-ups.png",
    },
    {
      id: 3,
      title: "Plank Hold",
      isNew: false,
      duration: "1 Min Total",
      reps: "3 X Reps Each",
      image: "/plank-hold.png",
    },
    {
      id: 4,
      title: "Core Abs",
      isNew: false,
      duration: "10 Min Total",
      reps: "10 X Reps Each",
      image: "/core-abs.png",
    },
  ];

  return (
    <div className="h-[786px] relative w-full mt-32">
      <div className="relative bg-white/5 w-full rounded-[40px]  h-[786px] z-10 flex items-start justify-center mx-auto px-6 sm:px-8 lg:px-28 py-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl mb-12 space-y-8">
          <div className="px-5 py-1.5 bg-blue-500/10 rounded-[60px] inline-flex justify-start items-center gap-1.5">
            <div className="justify-center text-blue-500 text-base leading-normal">
              Workout Library
            </div>
          </div>

          <div className="self-stretch justify-center text-5xl capitalize leading-[57.60px]">
            <span className="text-white">Work </span>
            <span className="text-white/70">Smart,</span>
            <br />
            <span className="text-white/70">Build </span>
            <span className="text-white">Real Strength.</span>
          </div>

          <div className="w-[494px] justify-center text-white/70 text-xl leading-loose">
            Browse expertly designed routines that match your goals, style, and
            schedule — whether you are training at home or in the gym.
          </div>

          {/* Workout Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-20">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="bg-white/5 rounded-[24px] p-2 w-[350px] flex items-center gap-4 transition-all duration-300"
              >
                {/* Left Image */}
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={workout.image}
                    alt={workout.title}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Right Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-lg">
                      {workout.title}
                    </h3>
                    {workout.isNew && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium cursor-pointer">
                        New
                      </span>
                    )}
                  </div>

                  <div className="items-center mt-2 space-y-2">
                    <div className="flex items-center gap-1 bg-white/10 text-white text-sm px-2 py-0.5 rounded-md w-fit">
                      <Image
                        src="/workout-icon-1.png"
                        alt="iPhone Mockup"
                        width={14}
                        height={14}
                        priority
                      />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 text-white text-sm px-2 py-0.5 rounded-md w-fit">
                      <Image
                        src="/workout-icon-2.png"
                        alt="iPhone Mockup"
                        width={14}
                        height={14}
                        priority
                      />
                      <span>{workout.reps}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Athletic Model */}
        <div className="flex-1 max-w-lg lg:max-w-none relative flex items-end justify-end">
          <Image
            src="/workout-image.png"
            alt="Athletic Model"
            width={590}
            height={843}
            priority
            className="relative top-[-100px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutLibrarySection;
