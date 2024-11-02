import React from "react";
import background2 from "../artifacts/icon3.png";
import background3 from "../artifacts/icon25.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = () => {
  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        backgroundImage: `url(${background2}),url(${background3})`,
        backgroundSize: "20% 20%,90% 90%",
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundPosition: "top left,center",
      }}
    >
      <div className="flex mx-auto border-solid border-x-8 border-b-[40px] border-[#191919] text-[#f9f4f0] w-full sm:w-3/4">
        <div className="flex-1 flex-col w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <div
              id="projects"
              className="font-azeret text-2xl md:text-4xl p-10 "
            >
              Key Projects
            </div>
            <div className="flex flex-col sm:w-[75%] items-center">
              <div className="w-full bg-[#111111] pb-10">
                <div className=" flex flex-col ">
                  <h2 className="font-azeret">Multistage Deep learning</h2>
                  <p className="font-italic ">
                    Guide: Prof. Arya kumar | Course Project: Deep learning
                  </p>
                </div>
                <p className="font-cutive text-[#a2b2bc]">
                  • Stage-1: The construction and optimization of an Artificial
                  Neural Network (ANN) for regression tasks, leveraging
                  vectorization in Python without the use of deep learning
                  libraries.
                </p>
                <p className="font-cutive text-[#a2b2bc]">
                  • Stage-2: Neural machine translation using Python code
                  provided in a book chapter by Jason Brown Lee.
                </p>
                <p className="font-cutive text-[#a2b2bc]">
                  • Stage-3: Extended the stage-2 to incorporate conditional
                  language generation for improved accuracy.
                </p>
                <div className="flex">
                  <a
                    className="ml-auto px-2 py-1 border rounded-md border-[#f9f4f0] text-[#f9f4f0] font-bold hover:bg-gray-800"
                    href="https://github.com/dandirohith/Multi-Stage-Deep-Learning-Project"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="w-full bg-[#111111] pb-10">
                <h2 className="font-azeret">
                  Interpretable Face Representation Learning with Explainable AI
                  |
                </h2>
                <p className="font-italic ">Guide: Prof. Nidhi Goyal |</p>
                <p className="font-cutive text-[#a2b2bc]">
                  • In this ongoing project, I’m utilizing Python, Computer
                  Vision, and Pytorch to pioneer Explainable AI (XAI)
                  applications in face representation learning. Focused on
                  enhancing interpretability.
                </p>
                <p className="font-cutive text-[#a2b2bc]">
                  • The goal is to make complex face representation tasks more
                  transparent and applicable for real-world scenarios.
                </p>
                <div className="flex">
                  <a
                    className="ml-auto px-2 py-1 border rounded-md border-[#f9f4f0] text-[#f9f4f0] font-bold hover:bg-gray-800"
                    href="https://github.com/dandirohith/Explainable-Face-Recognition-XFR"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="/allprojects"
                  className="flex items-center px-2 py-1 border rounded-md border-[f9f4f0] font-bold text-[#f9f4f0] hover:bg-gray-800"
                >
                  View More
                  <span className="ml-2">
                    <FaExternalLinkAlt />
                  </span>
                </a>
              </div>
              <div className="font-azeret text-2xl md:text-4xl p-10">
                Publications
              </div>
              <div className="w-full bg-[#111111]">
                <h2 className="font-azeret">
                  Soybean Genome Clustering Using Quantum-Based Fuzzy C-Means
                  Algorithm
                </h2>
                <p className="font-cutive text-[#a2b2bc]">
                  The 30th International Conference on Neural Information
                  Processing, ICONIP, Nov' 20-23, 2023, China. (Published)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
