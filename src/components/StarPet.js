import React, { useState, useEffect } from "react";
import "./StarPet.css";
import petsData from "../HKSCDA_animal_info.json";
import { IconButton, SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";

function StarPet() {
  // State to store the selected pet
  const [selectedPet, setSelectedPet] = useState(null);
  //   console.log(petsData);
  const catData = petsData.HKSCDA_cat;
  const dogData = petsData.HKSCDA_dog;
  const species = [catData, dogData];

  // Function to select a random species from the JSON data
  const getRandomSpecies = () => {
    const optionRandomIndex = Math.floor(Math.random() * species.length);
    const petRandomIndex = Math.floor(
      Math.random() * species[optionRandomIndex].length
    );
    const selectedPet = species[optionRandomIndex][petRandomIndex];
    return selectedPet;
  };
  //   const petStar = getRandomSpecies;
  //   console.log(petStar());

  const petStar = () => {
    const randomPet = getRandomSpecies();
    setSelectedPet(randomPet);
  };
  // Use useEffect to update the pet daily
  useEffect(() => {
    petStar();

    // Set an interval to update daily (86400000 milliseconds = 1 day)
    const intervalId = setInterval(petStar, 86400000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div className="star-wrapper">
        {selectedPet && (
          <div className="pet-star">
            <div className="star-container">
              <img
                className="star-photo"
                src={selectedPet.image}
                alt={selectedPet.name}
              ></img>
              <div className="info-wrapper">
                <img
                  className="text-background"
                  src="./StarPetImgs/star-text-bg.png"
                  alt="upper left frame"
                ></img>
                <div className="info">
                  <div className="text">Hello, 我叫{selectedPet.name}呀！</div>
                  <div className="text">
                    我同其他朋友都等緊一個家，快啲帶我哋返去啦～
                  </div>
                  <div className="call-to-action">
                    <Link
                      key={selectedPet.name}
                      to={{
                        pathname: `/Category_Page/${selectedPet.name}`,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton id="about-me">
                        <SvgIcon
                          id="about-me-icon"
                          enable-background="new 0 0 512 512"
                          height="512"
                          viewBox="0 0 512 512"
                          width="512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <g>
                              <path
                                d="m442.182 431.58v-335.645c0-38.192-26.633-70.143-62.334-78.353l-25.588 16.379-224.105.345v397.274c0 44.415 8.964 80.42 108.595 80.42h123.012c44.414 0 80.42-36.005 80.42-80.42z"
                                fill="#b0ebd8"
                              />
                              <path
                                d="m379.848 17.583c-5.816-1.337-11.864-2.068-18.087-2.068-58.694 0-152.771 0-211.523 0-44.415 0-80.42 36.005-80.42 80.42v335.645c0 44.415 36.005 80.42 80.42 80.42h85.333 3.178c-44.415 0-80.42-36.005-80.42-80.42v-330.581c8.083 4.824 17.517 7.607 27.594 7.607h140.154c29.8 0 54.044-24.244 54.044-54.044v-31.548c0-1.833-.094-3.645-.273-5.431z"
                                fill="#5fd9b3"
                              />
                              <path
                                d="m379.075 65.138-27.226 17.092h-202.386v353.487c0 16.425 5.689 29.737 61.802 29.737h154.634c16.425 0 29.737-13.312 29.737-29.737v-343.919c0-11.692-6.748-21.802-16.561-26.66z"
                                fill="#efedff"
                              />
                              <path
                                d="m365.899 62.061c-.08 0-89.828 0-154.634 0h-65.164c-16.423 0-29.737 13.314-29.737 29.737v343.919c0 16.423 13.314 29.737 29.737 29.737h65.164c-16.425 0-29.737-13.312-29.737-29.737v-288.926c0-21.089 17.096-38.185 38.185-38.185h106.365c26.181 0 48.067-18.715 52.999-43.468-3.974-1.967-8.445-3.077-13.178-3.077z"
                                fill="#d4d4ff"
                              />
                              <path
                                d="m349.091 54.562v-31.548c0-12.668-10.269-23.014-23.014-23.014h-101.366c-39.564 0-41.632 10.322-41.632 23.014v31.547c0 12.668 9.05 23.014 41.632 23.014h101.366c12.723.001 23.014-10.322 23.014-23.013z"
                                fill="#726c88"
                              />
                              <path
                                d="m201.697 54.562v-31.548c0-12.692 10.291-23.014 23.014-23.014h-38.788c-12.723 0-23.014 10.322-23.014 23.014v31.547c0 12.668 10.269 23.014 23.014 23.014h38.788c-12.745.001-23.014-10.345-23.014-23.013z"
                                fill="#656178"
                              />
                              <path
                                d="m356.848 160.323c0-8.564-6.951-15.515-15.515-15.515h-142.739c-23.531 0-28.962 6.965-28.962 15.515 0 8.564 7.24 15.515 28.962 15.515h142.739c8.565 0 15.515-6.965 15.515-15.515z"
                                fill="#a3defe"
                              />
                              <path
                                d="m183.079 160.323c0-8.55 6.951-15.515 15.515-15.515h-27.927c-8.565 0-15.515 6.965-15.515 15.515 0 8.564 6.951 15.515 15.515 15.515h27.927c-8.564 0-15.515-6.95-15.515-15.515z"
                                fill="#8cd6fe"
                              />
                              <path
                                d="m350.332 297.105c4.766-8.586 5.08-18.181 1.564-25.139-9.122-9.122-22.67-1.175-28.216 8.817-4.766 8.594-7.425 21.122 2.364 30.912 8.851 1.003 18.742-4.591 24.288-14.59z"
                                fill="#d0876f"
                              />
                              <path
                                d="m327.608 286.546c5.546-9.991 15.437-15.583 24.288-14.579-1.596-3.159-3.981-5.774-7.098-7.505-9.992-5.544-23.707.083-30.637 12.567-8.57 15.453-2.487 33.037 11.883 34.666-3.516-6.959-3.203-16.556 1.564-25.149z"
                                fill="#c9735a"
                              />
                              <path
                                d="m312.858 356.538c-7.023-3.32-12.329-9.319-15.194-16.549-3.946-9.94-11.346-18.134-20.717-23.104-19.136-3.21-34.727 8.312-38.674 18.253-2.865 7.23-8.171 13.229-15.195 16.549-12.247 5.803-20.718 18.277-20.718 32.727 0 5.026 5.026 22.74 21.512 17.869 19.085-18.282 49.833-17.019 67.337 3.222 14.128 16.337 41.43 6.741 42.336-14.688.601-15.043-7.928-28.244-20.687-34.279z"
                                fill="#d0876f"
                              />
                              <path
                                d="m241.034 356.538c7.023-3.32 12.329-9.319 15.195-16.549 3.946-9.94 11.346-18.134 20.717-23.104-23.249-12.328-52.656-1.966-62.609 23.104-2.865 7.23-8.171 13.229-15.194 16.549-12.247 5.803-20.718 18.277-20.718 32.727 0 23.158 28.196 32.626 42.367 16.239.985-1.139 2.019-2.204 3.081-3.222-2.225-3.612-3.556-7.991-3.556-13.018-.001-14.449 8.471-26.923 20.717-32.726z"
                                fill="#c9735a"
                              />
                              <path
                                d="m197.839 277.028c-5.311-9.568-14.606-15.1-23.158-14.671-10.221 2.876-10.639 22.096-5.997 30.459 5.311 9.576 20.17 16.808 30.967 8.8 3.229-6.909 2.83-16.218-1.812-24.588z"
                                fill="#d0876f"
                              />
                              <path
                                d="m176.493 286.934c-4.642-8.363-5.042-17.669-1.812-24.577-15.203.763-21.777 18.96-13.014 34.748 9.666 17.428 30.805 19.865 37.983 4.511-8.55.428-17.846-5.107-23.157-14.682z"
                                fill="#c9735a"
                              />
                              <path
                                d="m276.687 254.924c0-10.27-4.785-19.139-11.723-23.313-16.894 0-20.687 13.043-20.687 23.313s5.861 23.313 20.687 23.313c6.938-4.174 11.723-13.043 11.723-23.313z"
                                fill="#d0876f"
                              />
                              <path
                                d="m253.242 254.924c0-10.27 4.785-19.139 11.723-23.313-2.712-1.632-5.752-2.546-8.964-2.546-11.429 0-20.687 11.574-20.687 25.859 0 19.211 16.079 31.479 29.651 23.313-6.938-4.174-11.723-13.043-11.723-23.313z"
                                fill="#c9735a"
                              />
                            </g>
                          </g>
                        </SvgIcon>
                        起我底
                      </IconButton>
                    </Link>
                    <Link
                      to={{
                        pathname: `/Category_Page`,
                      }}
                    >
                      <IconButton href="www.google.com" id="more-pet">
                        <SvgIcon
                          id="pets-icon"
                          enable-background="new 0 0 512 512"
                          height="512"
                          viewBox="0 0 512 512"
                          width="512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              d="m7.611 143.299v-58.886c0-8.864 7.186-16.05 16.05-16.05 5.546 0 10.7 2.864 13.629 7.573l41.896 67.363-35.788 12.059z"
                              fill="#918291"
                            />
                            <path
                              d="m37.29 75.936c-2.929-4.71-8.083-7.573-13.629-7.573-8.864 0-16.05 7.186-16.05 16.05v2.346c.068-.001.135-.01.203-.01 5.546 0 10.7 2.864 13.629 7.573l30.608 48.977 11.903 5.133 15.232-5.133z"
                              fill="#7f737f"
                            />
                            <path
                              d="m245.783 143.299 4.973-27.374-4.973-31.513c0-8.864-7.186-16.05-16.05-16.05-5.546 0-10.7 2.864-13.629 7.573l-41.896 67.363 35.788 8.916z"
                              fill="#918291"
                            />
                            <path
                              d="m229.733 68.363c-5.546 0-10.7 2.863-13.629 7.573l-3.271 5.259c3.552 2.944 5.815 7.388 5.815 12.362v49.742l6.533 5.133 20.602-5.133 4.973-27.374-4.973-31.513c0-8.863-7.186-16.049-16.05-16.049z"
                              fill="#7f737f"
                            />
                            <path
                              d="m126.697 346.882c-65.769 0-119.086-10.887-119.086-76.656v-126.927h238.171l16.024 55.492-16.024 46.656v24.778c.001 65.769-53.316 76.657-119.085 76.657z"
                              fill="#e2dee2"
                            />
                            <path
                              d="m218.648 143.299v126.926c0 61.18-46.139 74.867-105.518 76.48 4.453.121 8.979.176 13.567.176 65.769 0 119.086-10.887 119.086-76.656v-24.778l16.024-46.656-16.024-55.492z"
                              fill="#cbc4cc"
                            />
                            <path
                              d="m95.617 346.882h62.16c33.987 0 61.539 27.552 61.539 61.539v58.633c0 7.505-6.084 13.589-13.589 13.589l-36.709-.004-42.321-13.248-42.322 13.251h-36.708c-7.505 0-13.589-6.084-13.589-13.589v-58.633c0-33.986 27.552-61.538 61.539-61.538z"
                              fill="#e2dee2"
                            />
                            <path
                              d="m157.777 346.882h-27.135c33.987 0 61.539 27.552 61.539 61.539v58.633c0 7.505-6.084 13.589-13.589 13.589h27.135c7.505 0 13.589-6.084 13.589-13.589v-58.633c.001-33.987-27.552-61.539-61.539-61.539z"
                              fill="#cbc4cc"
                            />
                            <path
                              d="m169.019 480.643h-42.322l-7.763-35.93 7.763-27.741c0-4.518 3.663-8.181 8.181-8.181h25.96c4.518 0 8.181 3.663 8.181 8.181z"
                              fill="#918291"
                            />
                            <path
                              d="m169.018 416.977v63.663h-17.425v-63.663c0-4.526-3.664-8.19-8.18-8.19h17.425c4.516 0 8.18 3.664 8.18 8.19z"
                              fill="#7f737f"
                            />
                            <path
                              d="m126.697 480.643h-42.322v-63.671c0-4.518 3.663-8.181 8.181-8.181h25.96c4.518 0 8.181 3.663 8.181 8.181z"
                              fill="#918291"
                            />
                            <path
                              d="m126.696 416.977v63.663h-17.425v-63.663c0-4.526-3.664-8.19-8.18-8.19h17.425c4.516 0 8.18 3.664 8.18 8.19z"
                              fill="#7f737f"
                            />
                            <path
                              d="m512 103.576v141.868c0 73.517-59.593 85.685-133.11 85.685s-133.11-12.168-133.11-85.685v-141.868z"
                              fill="#e19974"
                            />
                            <path
                              d="m484.865 103.575v141.873c0 68.934-52.4 83.928-119.541 85.529 4.461.106 8.987.154 13.567.154 73.514 0 133.109-12.169 133.109-85.683v-141.873z"
                              fill="#dc8758"
                            />
                            <path
                              d="m344.151 331.13h69.48c37.989 0 68.786 30.796 68.786 68.786v67.138c0 7.505-6.084 13.589-13.589 13.589h-179.873c-7.505 0-13.589-6.084-13.589-13.589v-67.138c-.001-37.989 30.796-68.786 68.785-68.786z"
                              fill="#e19974"
                            />
                            <path
                              d="m413.631 331.13h-27.135c37.989 0 68.786 30.797 68.786 68.786v67.138c0 7.505-6.084 13.589-13.589 13.589h27.135c7.505 0 13.589-6.084 13.589-13.589v-67.138c0-37.989-30.796-68.786-68.786-68.786z"
                              fill="#dc8758"
                            />
                            <path
                              d="m367.546 480.643h-41.24v-72.278c0-4.438 3.597-8.035 8.035-8.035h25.17c4.438 0 8.035 3.597 8.035 8.035z"
                              fill="#e19974"
                            />
                            <path
                              d="m367.544 408.361v72.279h-19.049v-72.279c0-4.435-3.593-8.028-8.038-8.028h19.049c4.445 0 8.038 3.593 8.038 8.028z"
                              fill="#dc8758"
                            />
                            <path
                              d="m359.54 253.62h38.703v26.157c0 10.688-8.664 19.352-19.352 19.352-10.688 0-19.352-8.664-19.352-19.352v-26.157z"
                              fill="#e759aa"
                            />
                            <path
                              d="m378.891 253.62v26.157c0 7.159-3.897 13.394-9.676 16.741 2.849 1.65 6.147 2.61 9.676 2.61 10.688 0 19.351-8.664 19.351-19.351v-26.157z"
                              fill="#e03d9c"
                            />
                            <path
                              d="m337.699 103.575h-91.916v-38.475c0-18.636 15.107-33.744 33.744-33.744h24.429c18.636 0 33.744 15.107 33.744 33.744v38.475z"
                              fill="#e19974"
                            />
                            <path
                              d="m303.955 31.357h-24.429c-.454 0-.904.017-1.353.034 18.008.711 32.391 15.527 32.391 33.709v38.474h27.135v-38.474c-.001-18.636-15.108-33.743-33.744-33.743z"
                              fill="#dc8758"
                            />
                            <path
                              d="m297.262 143.299c-13.968 0-25.292-11.324-25.292-25.292v-39.22c0-4.182 3.39-7.572 7.572-7.572 4.182 0 7.572 3.39 7.572 7.572v39.22h35.44c0 13.968-11.324 25.292-25.292 25.292z"
                              fill="#dc8758"
                            />
                            <path
                              d="m312.406 143.299c-13.968 0-25.292-11.324-25.292-25.292v-46.792h50.584v46.792c.001 13.968-11.323 25.292-25.292 25.292z"
                              fill="#e19974"
                            />
                            <path
                              d="m310.564 71.215v46.792c0 8.974-4.678 16.851-11.725 21.34 3.921 2.498 8.573 3.952 13.567 3.952 13.968 0 25.292-11.324 25.292-25.292v-46.792z"
                              fill="#dc8758"
                            />
                            <path
                              d="m420.084 103.575h91.916v-38.475c0-18.636-15.107-33.744-33.744-33.744h-24.429c-18.636 0-33.744 15.107-33.744 33.744v38.475z"
                              fill="#e19974"
                            />
                            <path
                              d="m478.256 31.357h-24.429c-.454 0-.903.017-1.353.034 18.008.711 32.39 15.527 32.39 33.709v38.474h27.136v-38.474c0-18.636-15.108-33.743-33.744-33.743z"
                              fill="#dc8758"
                            />
                            <path
                              d="m457.106 103.576v14.431c0 13.965-11.326 25.291-25.301 25.291-13.965 0-25.29-11.326-25.29-25.291v-14.431z"
                              fill="#dc8758"
                            />
                            <path
                              d="m445.376 143.299c13.968 0 25.292-11.324 25.292-25.292v-46.792h-50.584v46.792c0 13.968 11.324 25.292 25.292 25.292z"
                              fill="#e19974"
                            />
                            <path
                              d="m456.814 71.215c-7.334 0-13.28 5.946-13.28 13.28v33.512c0 8.974-4.678 16.851-11.725 21.34 3.921 2.498 8.573 3.952 13.567 3.952 13.968 0 25.292-11.324 25.292-25.292v-32.938c0-7.651-6.202-13.854-13.854-13.854z"
                              fill="#dc8758"
                            />
                            <g>
                              <g>
                                <path
                                  d="m83.195 256.292c-4.204 0-7.611-3.408-7.611-7.611v-13.71c0-4.204 3.407-7.611 7.611-7.611s7.611 3.408 7.611 7.611v13.71c.001 4.203-3.407 7.611-7.611 7.611z"
                                  fill="#918291"
                                />
                              </g>
                              <g>
                                <path
                                  d="m170.198 256.292c-4.204 0-7.611-3.408-7.611-7.611v-13.71c0-4.204 3.407-7.611 7.611-7.611s7.611 3.408 7.611 7.611v13.71c.001 4.203-3.407 7.611-7.611 7.611z"
                                  fill="#918291"
                                />
                              </g>
                            </g>
                            <path
                              d="m156.92 286.62c-2.093-3.216-6.252-4.374-9.706-2.7l-.249.121c-1.157.706-6.702 3.639-12.657-.619v-27.129h2.17c4.204 0 7.611-3.408 7.611-7.611 0-4.204-3.407-7.611-7.611-7.611h-19.563c-4.204 0-7.611 3.408-7.611 7.611 0 4.204 3.407 7.611 7.611 7.611h2.169v27.132c-5.955 4.259-11.501 1.322-12.658.616l-.287-.154c-3.471-1.855-7.784-.746-9.93 2.552-2.485 3.819-1.08 8.986 3.032 10.95 5.222 2.495 9.057 3.499 13.288 3.499 4.467 0 9.373-1.131 14.165-4.221 4.794 3.092 9.701 4.221 14.17 4.221 4.098 0 7.826-.943 12.762-3.149 4.278-1.912 5.85-7.192 3.294-11.119z"
                              fill="#918291"
                            />
                            <g>
                              <g>
                                <path
                                  d="m34.136 255.808h-26.525c-4.204 0-7.611-3.408-7.611-7.612s3.407-7.611 7.611-7.611h26.524c4.204 0 7.611 3.408 7.611 7.611.001 4.204-3.406 7.612-7.61 7.612z"
                                  fill="#eaf9fa"
                                />
                              </g>
                              <g>
                                <path
                                  d="m10.258 300.894c-2.771 0-5.443-1.518-6.788-4.157-1.909-3.745-.419-8.329 3.326-10.238l29.061-14.812c3.744-1.908 8.329-.42 10.238 3.325s.419 8.329-3.326 10.238l-29.061 14.812c-1.106.565-2.288.832-3.45.832z"
                                  fill="#eaf9fa"
                                />
                              </g>
                              <g>
                                <path
                                  d="m34.134 335.861c-1.847 0-3.699-.668-5.163-2.021-3.088-2.852-3.278-7.668-.426-10.756l18.474-19.998c2.85-3.088 7.667-3.278 10.755-.426 3.088 2.853 3.278 7.668.426 10.756l-18.474 19.998c-1.499 1.624-3.543 2.447-5.592 2.447z"
                                  fill="#eaf9fa"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="m245.783 255.808h-26.524c-4.204 0-7.611-3.408-7.611-7.611 0-4.204 3.407-7.611 7.611-7.611h26.524c4.204 0 7.611 3.408 7.611 7.611s-3.407 7.611-7.611 7.611z"
                                  fill="#eaf9fa"
                                />
                              </g>
                              <g>
                                <path
                                  d="m243.137 300.894c-1.164 0-2.343-.267-3.45-.832l-29.062-14.812c-3.745-1.909-5.235-6.493-3.326-10.238 1.91-3.746 6.496-5.233 10.238-3.325l29.062 14.812c3.745 1.909 5.235 6.493 3.326 10.238-1.345 2.639-4.017 4.157-6.788 4.157z"
                                  fill="#eaf9fa"
                                />
                              </g>
                              <g>
                                <path
                                  d="m219.261 335.861c-2.05 0-4.092-.823-5.593-2.446l-18.475-19.998c-2.852-3.088-2.662-7.903.425-10.756 3.088-2.853 7.903-2.662 10.756.426l18.475 19.998c2.852 3.088 2.662 7.903-.425 10.756-1.464 1.351-3.316 2.02-5.163 2.02z"
                                  fill="#eaf9fa"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="m337.699 231.615c-4.204 0-7.611-3.408-7.611-7.611v-12.982c0-4.204 3.407-7.611 7.611-7.611s7.612 3.408 7.612 7.611v12.982c-.001 4.203-3.408 7.611-7.612 7.611z"
                                  fill="#918291"
                                />
                              </g>
                              <g>
                                <path
                                  d="m420.084 231.615c-4.204 0-7.611-3.408-7.611-7.611v-12.982c0-4.204 3.407-7.611 7.611-7.611s7.612 3.408 7.612 7.611v12.982c0 4.203-3.408 7.611-7.612 7.611z"
                                  fill="#918291"
                                />
                              </g>
                            </g>
                            <path
                              d="m420.084 246.008h-33.582v-22.004h-15.223v22.004h-33.581c-4.204 0-7.611 3.408-7.611 7.611 0 4.204 3.407 7.611 7.611 7.611h82.386c4.204 0 7.612-3.408 7.612-7.611s-3.408-7.611-7.612-7.611z"
                              fill="#918291"
                            />
                            <path
                              d="m326.306 480.643h-15.223v-72.701c0-4.204 3.408-7.611 7.611-7.611 4.204 0 7.612 3.408 7.612 7.611z"
                              fill="#dc8758"
                            />
                            <path
                              d="m399.291 480.643h-15.223v-72.701c0-4.204 3.408-7.611 7.611-7.611 4.204 0 7.611 3.408 7.611 7.611v72.701z"
                              fill="#dc8758"
                            />
                            <path
                              d="m440.531 480.643h-41.24v-72.278c0-4.438 3.597-8.035 8.035-8.035h25.17c4.438 0 8.035 3.597 8.035 8.035z"
                              fill="#e19974"
                            />
                            <path
                              d="m440.529 408.361v72.279h-19.049v-72.279c0-4.435-3.593-8.028-8.038-8.028h19.049c4.445 0 8.038 3.593 8.038 8.028z"
                              fill="#dc8758"
                            />
                            <g>
                              <path
                                d="m388.154 231.615h-18.524c-4.204 0-7.611-3.408-7.611-7.611 0-4.204 3.407-7.612 7.611-7.612h18.524c4.204 0 7.611 3.408 7.611 7.612 0 4.203-3.407 7.611-7.611 7.611z"
                                fill="#e759aa"
                              />
                            </g>
                          </g>
                        </SvgIcon>
                        識埋我啲Fd
                      </IconButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="frame upper-right"
              src="./StarPetImgs/star-frame-ur.png"
              alt="upper right frame"
            ></img>
            <img
              className="frame bottom-left"
              src="./StarPetImgs/star-frame-bl.png"
              alt="bottom left frame"
            ></img>
            <img
              className="frame bottom"
              src="./StarPetImgs/star-frame-b.png"
              alt="bottom frame"
            ></img>
          </div>
        )}
      </div>
    </>
  );
}

export default StarPet;
