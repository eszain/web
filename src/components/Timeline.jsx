"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              {item.job === "Code The Dream Durham, NC" ? (
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <div className="flex flex-col items-start">
                    <h3 className="text-sm text-neutral-500 mb-2">{item.date}</h3>
                    <h3 className="text-4xl text-neutral-300 mb-2">Code The Dream</h3>
                    <h3 className="text-2xl text-neutral-400 mb-4">Coding Mentor</h3>
                    <div className="relative mt-8">
                      <motion.div 
                        className="relative w-48 h-48 p-3 rounded-lg bg-gradient-to-br from-[#F1603E]/20 to-[#F1603E]/12"
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(241, 96, 62, 0.3), 0 0 20px rgba(241, 96, 62, 0.2), 0 0 30px rgba(241, 96, 62, 0.1)",
                            "0 0 15px rgba(241, 96, 62, 0.5), 0 0 30px rgba(241, 96, 62, 0.3), 0 0 45px rgba(241, 96, 62, 0.1)",
                            "0 0 10px rgba(241, 96, 62, 0.3), 0 0 20px rgba(241, 96, 62, 0.2), 0 0 30px rgba(241, 96, 62, 0.1)"
                          ],
                          borderColor: [
                            "rgba(241, 96, 62, 0.5)",
                            "rgba(241, 96, 62, 1)",
                            "rgba(241, 96, 62, 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          border: "2px solid rgba(241, 96, 62, 0.5)"
                        }}
                      >
                        <img 
                          src="/assets/CTD.png" 
                          alt="Code The Dream Logo" 
                          className="w-full h-full object-contain rounded"
                        />
                        {/* Energy absorption effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            background: [
                              "radial-gradient(circle at 50% 50%, rgba(241, 96, 62, 0.1) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(241, 96, 62, 0.2) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(241, 96, 62, 0.1) 0%, transparent 70%)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : item.job === "Hack the 6ix" ? (
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <div className="flex flex-col items-start">
                    <h3 className="text-sm text-neutral-500 mb-2">{item.date}</h3>
                    <h3 className="text-4xl text-neutral-300 mb-2">Hack The 6ix</h3>
                    <h3 className="text-2xl text-neutral-400 mb-4">Mentor</h3>
                    <div className="relative mt-8">
                      <motion.div 
                        className="relative w-48 h-48 p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20"
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)",
                            "0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3), 0 0 45px rgba(59, 130, 246, 0.1)",
                            "0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)"
                          ],
                          borderColor: [
                            "rgba(59, 130, 246, 0.5)",
                            "rgba(59, 130, 246, 1)",
                            "rgba(59, 130, 246, 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          border: "2px solid rgba(59, 130, 246, 0.5)"
                        }}
                      >
                        <img 
                          src="/assets/ht6.png" 
                          alt="Hack the 6ix Logo" 
                          className="w-full h-full object-contain rounded"
                        />
                        {/* Energy absorption effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            background: [
                              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : item.image ? (
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <div className="flex flex-col items-start">
                    <h3 className="text-sm text-neutral-500 mb-2">{item.date}</h3>
                    <h3 className="text-4xl text-neutral-300 mb-2">{item.title}</h3>
                    <h3 className="text-2xl text-neutral-400 mb-4">{item.job}</h3>
                    <div className="relative mt-8">
                      <motion.div 
                        className={`relative w-48 h-48 p-3 rounded-lg bg-gradient-to-br ${item.image === "/assets/mza.png" ? "from-emerald-500/20 to-emerald-700/20" : item.image === "/assets/fixthe6ix.png" ? "from-blue-500/20 to-sky-500/20" : "from-slate-700/20 to-slate-500/20"}`}
                        animate={{
                          boxShadow: [
                            `0 0 10px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.3), 0 0 20px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.2), 0 0 30px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1)`,
                            `0 0 15px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5), 0 0 30px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.3), 0 0 45px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1)`,
                            `0 0 10px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.3), 0 0 20px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.2), 0 0 30px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1)`
                          ],
                          borderColor: [
                            `rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5)`,
                            `rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 1)`,
                            `rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5)`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          border: `2px solid rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5)`
                        }}
                      >
                        <img 
                          src={item.image} 
                          alt={`${item.title} logo`} 
                          className="w-full h-full object-contain rounded"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            background: [
                              `radial-gradient(circle at 50% 50%, rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1) 0%, transparent 70%)`,
                              `radial-gradient(circle at 50% 50%, rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.2) 0%, transparent 70%)`,
                              `radial-gradient(circle at 50% 50%, rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1) 0%, transparent 70%)`
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <h3>{item.date}</h3>
                  <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                  <h3 className="text-3xl text-neutral-500">{item.job}</h3>
                </div>
              )}
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {item.job === "Code The Dream Durham, NC" ? (
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <div className="flex flex-col items-start">
                    <h3 className="text-sm text-neutral-500 mb-2">{item.date}</h3>
                    <h3 className="text-2xl text-neutral-300 mb-2">Code The Dream</h3>
                    <h3 className="text-xl text-neutral-400 mb-4">Coding Mentor</h3>
                    <div className="relative mt-6">
                      <motion.div 
                        className="relative w-36 h-36 p-2 rounded-lg bg-gradient-to-br from-[#F1603E]/20 to-[#F1603E]/12"
                        animate={{
                          boxShadow: [
                            "0 0 8px rgba(241, 96, 62, 0.3), 0 0 16px rgba(241, 96, 62, 0.2), 0 0 24px rgba(241, 96, 62, 0.1)",
                            "0 0 12px rgba(241, 96, 62, 0.5), 0 0 24px rgba(241, 96, 62, 0.3), 0 0 36px rgba(241, 96, 62, 0.1)",
                            "0 0 8px rgba(241, 96, 62, 0.3), 0 0 16px rgba(241, 96, 62, 0.2), 0 0 24px rgba(241, 96, 62, 0.1)"
                          ],
                          borderColor: [
                            "rgba(241, 96, 62, 0.5)",
                            "rgba(241, 96, 62, 1)",
                            "rgba(241, 96, 62, 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          border: "2px solid rgba(241, 96, 62, 0.5)"
                        }}
                      >
                        <img 
                          src="/assets/CTD.png" 
                          alt="Code The Dream Logo" 
                          className="w-full h-full object-contain rounded"
                        />
                        {/* Energy absorption effect for mobile */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            background: [
                              "radial-gradient(circle at 50% 50%, rgba(241, 96, 62, 0.05) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(241, 96, 62, 0.15) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(241, 96, 62, 0.05) 0%, transparent 70%)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : item.job === "Hack the 6ix" ? (
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <div className="flex flex-col items-start">
                    <h3 className="text-sm text-neutral-500 mb-2">{item.date}</h3>
                    <h3 className="text-2xl text-neutral-300 mb-2">Hack The 6ix</h3>
                    <h3 className="text-xl text-neutral-400 mb-4">Mentor</h3>
                    <div className="relative mt-6">
                      <motion.div 
                        className="relative w-36 h-36 p-2 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20"
                        animate={{
                          boxShadow: [
                            "0 0 8px rgba(59, 130, 246, 0.3), 0 0 16px rgba(59, 130, 246, 0.2), 0 0 24px rgba(59, 130, 246, 0.1)",
                            "0 0 12px rgba(59, 130, 246, 0.5), 0 0 24px rgba(59, 130, 246, 0.3), 0 0 36px rgba(59, 130, 246, 0.1)",
                            "0 0 8px rgba(59, 130, 246, 0.3), 0 0 16px rgba(59, 130, 246, 0.2), 0 0 24px rgba(59, 130, 246, 0.1)"
                          ],
                          borderColor: [
                            "rgba(59, 130, 246, 0.5)",
                            "rgba(59, 130, 246, 1)",
                            "rgba(59, 130, 246, 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          border: "2px solid rgba(59, 130, 246, 0.5)"
                        }}
                      >
                        <img 
                          src="/assets/ht6.png" 
                          alt="Hack the 6ix Logo" 
                          className="w-full h-full object-contain rounded"
                        />
                        {/* Energy absorption effect for mobile */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            background: [
                              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : item.image ? (
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <div className="flex flex-col items-start">
                    <h3 className="text-sm text-neutral-500 mb-2">{item.date}</h3>
                    <h3 className="text-2xl text-neutral-300 mb-2">{item.title}</h3>
                    <h3 className="text-xl text-neutral-400 mb-4">{item.job}</h3>
                    <div className="relative mt-6">
                      <motion.div 
                        className={`relative w-36 h-36 p-2 rounded-lg bg-gradient-to-br ${item.image === "/assets/mza.png" ? "from-emerald-500/20 to-emerald-700/20" : item.image === "/assets/fixthe6ix.png" ? "from-blue-500/20 to-sky-500/20" : "from-slate-700/20 to-slate-500/20"}`}
                        animate={{
                          boxShadow: [
                            `0 0 8px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.3), 0 0 16px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.2), 0 0 24px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1)`,
                            `0 0 12px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5), 0 0 24px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.3), 0 0 36px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1)`,
                            `0 0 8px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.3), 0 0 16px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.2), 0 0 24px rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.1)`
                          ],
                          borderColor: [
                            `rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5)`,
                            `rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 1)`,
                            `rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5)`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          border: `2px solid rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.5)`
                        }}
                      >
                        <img 
                          src={item.image} 
                          alt={`${item.title} logo`} 
                          className="w-full h-full object-contain rounded"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            background: [
                              `radial-gradient(circle at 50% 50%, rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.05) 0%, transparent 70%)`,
                              `radial-gradient(circle at 50% 50%, rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.15) 0%, transparent 70%)`,
                              `radial-gradient(circle at 50% 50%, rgba(${item.image === "/assets/mza.png" ? "16, 185, 129" : item.image === "/assets/fixthe6ix.png" ? "59, 130, 246" : "148, 163, 184"}, 0.05) 0%, transparent 70%)`
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                  <h3>{item.date}</h3>
                  <h3>{item.job}</h3>
                </div>
              )}
              {item.contents.map((content, index) => (
                <p className="mb-3 font-normal text-neutral-400" key={index}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
