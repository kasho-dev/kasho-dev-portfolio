<template>
  <div class="bg-[#181818] text-white">
    <!-- Fixed Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-[#181818]/90 backdrop-blur-sm flex justify-between items-center px-8 py-6"
    >
      <div class="text-xl font-semibold">
        <!-- Logo placeholder -->
      </div>
      <ul class="flex space-x-8">
        <li><a href="#" class="text-green-400 hover:text-green-300 transition-colors">About</a></li>
        <li>
          <a href="#" class="text-green-400 hover:text-green-300 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#" class="text-green-400 hover:text-green-300 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Scroll Container with custom scroll behavior -->
    <div
      class="snap-y snap-mandatory h-screen overflow-y-auto pt-16 scroll-smooth"
      style="
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        transition: scroll-behavior 1000ms cubic-bezier(0.4, 0, 0.2, 1);
      "
    >
      <!-- Hero Section -->
      <section
        class="snap-start min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-16"
      >
        <div class="text-center">
          <p class="text-green-400 text-lg mb-4">
            Hi, I am <span class="font-semibold">Kyle Arana</span> an
            <span class="underline">aspiring</span>
          </p>

          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-green-400 leading-tight mb-8"
          >
            Front End<br />
            Developer
          </h1>

          <button
            class="border-2 border-green-400 text-green-400 px-4 sm:px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-medium text-sm sm:text-base"
          >
            View my work
          </button>
        </div>
      </section>

      <!-- About Section -->
      <section class="snap-start min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-auto">
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="flex items-start gap-8 md:gap-12">
            <!-- Profile Image (Left side) -->
            <div class="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/3 lg:w-64">
              <img
                src="C:\Users\Kyle\myPortfolio\src\components\icons\Kyle_Arana_Profile.jpg"
                alt="Kyle Arana Profile"
                class="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <!-- About Content (Right side) -->
            <div class="flex-1">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-4 md:mb-6">
                About me
              </h2>
              <p class="text-gray-300 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus, purus quis
                posuere tempor, nibh eros varius metus, eu cursus elit ipsum vitae magna. Nunc non
                sem aliquet, feugiat ipsum sed, pretium lorem. Donec a sem eget est blandit molis,
                in ac tortor ac turpis scelerisque scelerisque feugiat ac urna. Suspendisse blandit
                pharetra est at lobortis. Nulla sit dolor dictum, imperdiet lorem in, ullamcorper
                odio. Pellentesque habitant eget condimentum. Nam sollicitudin enim nulla, vitae
                vestibulum tortor hendrerit et. Morbi at venenatis elit, eu cursus elit. Vestibulum
                blandit, mauris et tempus pellentesque, integer eget blandit eros. Nunc magna elit,
                egestas quis elementum vel, accumsan id turpis. Nunc a vestibulum augue, at
                tristique justo. Cras porttitor tincidunt eros, nec tincidunt nulla iaculis nec.
              </p>
              <button
                class="border-2 border-green-400 text-green-400 px-4 sm:px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-medium text-sm sm:text-base"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="snap-start min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-auto">
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-4">Projects</h2>
            <p class="text-gray-300">
              I'm currently looking to join a
              <span class="text-green-400 underline">cross-functional</span> team<br />
              that values improving people's lives through accessible design.
            </p>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-2 gap-6 sm:gap-8">
            <!-- Project 1 -->
            <div class="group relative">
              <div class="relative rounded-lg overflow-hidden aspect-[5/4] sm:aspect-[4/3] mb-0">
                <img
                  src="C:\Users\Kyle\myPortfolio\src\components\imgs\tracking-system-dashboard.png"
                  alt="Document Tracking System Dashboard"
                  class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
              <div class="mb-2">
                <span class="text-green-400 text-xs sm:text-sm uppercase tracking-wide"
                  >Full Stack Web Development</span
                >
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-white">
                Document Tracking System
              </h3>
            </div>

            <!-- Project 2 -->
            <div class="group relative">
              <div class="relative rounded-lg overflow-hidden aspect-[5/4] sm:aspect-[4/3] mb-0">
                <img
                  src="C:\Users\Kyle\myPortfolio\src\components\imgs\Presyotect.png"
                  alt="Presyotect Dashboard"
                  class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
              <div class="mb-2">
                <span class="text-green-400 text-sm uppercase tracking-wide"
                  >Front End Development</span
                >
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-white">Consumer Access Portal</h3>
            </div>

            <!-- Project 3 -->
            <div class="group relative">
              <div class="relative rounded-lg overflow-hidden aspect-[5/4] sm:aspect-[4/3] mb-0">
                <img
                  src="C:\Users\Kyle\myPortfolio\src\components\imgs\eventra-login.png"
                  alt="Eventra Catering Order & Expenses Tracker"
                  class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
              <div class="mb-2">
                <span class="text-green-400 text-xs sm:text-sm uppercase tracking-wide"
                  >Software App</span
                >
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-white">
                Eventra Catering Order & Expenses Tracker
              </h3>
            </div>

            <!-- Project 4 -->
            <div class="group relative">
              <div class="relative rounded-lg overflow-hidden aspect-[5/4] sm:aspect-[4/3] mb-0">
                <div class="w-full h-full bg-[#1f1f1f] flex items-center justify-center">
                  <span class="text-gray-400">Project Screenshot</span>
                </div>
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
              <div class="mb-2">
                <span class="text-green-400 text-sm uppercase tracking-wide"
                  >Full Stack Development</span
                >
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-white">
                Document Tracking System
              </h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="snap-start min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-auto">
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="text-center mb-12">
            <h2 class="text-5xl font-bold text-green-400 mb-8">Services</h2>
          </div>

          <!-- Services Grid -->
          <div class="grid grid-cols-2 gap-6 sm:gap-8">
            <!-- Service 1 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center"
                >
                  <!-- Icon placeholder -->
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Front End Web Development
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget egestas enim, ut
                dignissim orci. Donec lobortis laoreet erat, sed aliquet elit accumsan id.
                Vestibulum rutrum rutrum libero ac finibus.
              </p>
            </div>

            <!-- Service 2 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center"
                >
                  <!-- Icon placeholder -->
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Software App Development
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget egestas enim, ut
                dignissim orci. Donec lobortis laoreet erat, sed aliquet elit accumsan id.
                Vestibulum rutrum rutrum libero ac finibus.
              </p>
            </div>

            <!-- Service 3 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center"
                >
                  <!-- Icon placeholder -->
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Programming Languages
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget egestas enim, ut
                dignissim orci. Donec lobortis laoreet erat, sed aliquet elit accumsan id.
                Vestibulum rutrum rutrum libero ac finibus.
              </p>
            </div>

            <!-- Service 4 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center"
                >
                  <!-- Icon placeholder -->
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    User Interface Development
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget egestas enim, ut
                dignissim orci. Donec lobortis laoreet erat, sed aliquet elit accumsan id.
                Vestibulum rutrum rutrum libero ac finibus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Techstack Section -->
      <section class="snap-start min-h-[calc(100vh-4rem)] flex items-center bg-[#181818] py-16">
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="text-center mb-12">
            <h2 class="text-5xl font-bold text-green-400 mb-12">Techstack</h2>
          </div>

          <!-- First Row of Tech Icons -->
          <div
            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
          >
            <!-- Vue.js -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">V</span>
              </div>
              <span class="text-gray-300 text-sm">Vue.js</span>
            </div>

            <!-- Python -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">Py</span>
              </div>
              <span class="text-gray-300 text-sm">Python</span>
            </div>

            <!-- Java -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">J</span>
              </div>
              <span class="text-gray-300 text-sm">Java</span>
            </div>

            <!-- HTML -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">5</span>
              </div>
              <span class="text-gray-300 text-sm">HTML</span>
            </div>

            <!-- CSS -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">3</span>
              </div>
              <span class="text-gray-300 text-sm">CSS</span>
            </div>

            <!-- JavaScript -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
                <span class="text-black font-bold">JS</span>
              </div>
              <span class="text-gray-300 text-sm">JavaScript</span>
            </div>

            <!-- MongoDB -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">M</span>
              </div>
              <span class="text-gray-300 text-sm">MongoDB</span>
            </div>

            <!-- MySQL -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">SQL</span>
              </div>
              <span class="text-gray-300 text-sm">MySQL</span>
            </div>
          </div>

          <!-- Second Row of Tech Icons -->
          <div class="grid grid-cols-3 md:grid-cols-7 gap-8 justify-center">
            <!-- Tailwind -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-[#2a2a2a] rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">TW</span>
              </div>
              <span class="text-gray-300 text-sm">Tailwind</span>
            </div>

            <!-- Bootstrap -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">B</span>
              </div>
              <span class="text-gray-300 text-sm">Bootstrap</span>
            </div>

            <!-- TypeScript -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">TS</span>
              </div>
              <span class="text-gray-300 text-sm">TypeScript</span>
            </div>

            <!-- C# -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">C#</span>
              </div>
              <span class="text-gray-300 text-sm">C#</span>
            </div>

            <!-- Node.js -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">N</span>
              </div>
              <span class="text-gray-300 text-sm">Node.js</span>
            </div>

            <!-- Git -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">Git</span>
              </div>
              <span class="text-gray-300 text-sm">Git</span>
            </div>

            <!-- PocketBase -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-[#181818] rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">PB</span>
              </div>
              <span class="text-gray-300 text-sm">PocketBase</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Expertise Section -->
      <section class="snap-start min-h-[calc(100vh-4rem)] flex items-center bg-[#181818] py-16">
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="text-center mb-12">
            <h2 class="text-5xl font-bold text-green-400 mb-12">Other expertise</h2>
          </div>

          <!-- Other Expertise Icons -->
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-center"
          >
            <!-- Canva -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-2">
                <span class="text-white font-bold">Ca</span>
              </div>
              <span class="text-gray-300 text-sm">Canva</span>
            </div>

            <!-- Figma -->
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2"
              >
                <span class="text-white font-bold">Fi</span>
              </div>
              <span class="text-gray-300 text-sm">Figma</span>
            </div>

            <!-- Word -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">W</span>
              </div>
              <span class="text-gray-300 text-sm">Word</span>
            </div>

            <!-- Excel -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">X</span>
              </div>
              <span class="text-gray-300 text-sm">Excel</span>
            </div>

            <!-- PowerPoint -->
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-2">
                <span class="text-white font-bold">P</span>
              </div>
              <span class="text-gray-300 text-sm">PowerPoint</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer
        class="snap-start min-h-[calc(100vh-4rem)] relative bg-[#181818] border-t border-green-400/20 py-8 sm:py-12 md:py-16 flex items-center"
      >
        <div class="w-full">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]"
            ></div>
            <div
              class="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(34,197,94,0.05)_49%,rgba(34,197,94,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"
            ></div>
          </div>

          <div class="relative max-w-6xl mx-auto px-8 py-16">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              <!-- Brand Section -->
              <div class="lg:col-span-2">
                <div class="mb-6">
                  <h3 class="text-3xl font-bold text-white mb-2">Kyle Arana</h3>
                  <div
                    class="h-1 w-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  ></div>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                  Passionate front-end developer creating modern, accessible web experiences that
                  make a difference.
                </p>

                <!-- Social Links -->
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <div
                      class="w-6 h-6 bg-green-400 rounded group-hover:bg-white transition-colors duration-300"
                    ></div>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                  </a>
                  <a
                    href="#"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <div
                      class="w-6 h-6 bg-green-400 rounded group-hover:bg-white transition-colors duration-300"
                    ></div>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                  </a>
                  <a
                    href="#"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <div
                      class="w-6 h-6 bg-green-400 rounded group-hover:bg-white transition-colors duration-300"
                    ></div>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                  </a>
                  <a
                    href="#"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <div
                      class="w-6 h-6 bg-green-400 rounded group-hover:bg-white transition-colors duration-300"
                    ></div>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                  </a>
                </div>
              </div>

              <!-- Quick Links -->
              <div>
                <h4 class="text-xl font-semibold text-white mb-6 relative">
                  Quick Links
                  <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-400 rounded-full"></div>
                </h4>
                <ul class="space-y-3">
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >Projects</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Contact Info -->
              <div>
                <h4 class="text-xl font-semibold text-white mb-6 relative">
                  Get In Touch
                  <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-400 rounded-full"></div>
                </h4>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3 group">
                    <div
                      class="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300"
                    >
                      <div class="w-4 h-4 bg-green-400 rounded"></div>
                    </div>
                    <span class="text-gray-300">kyle.arana97@gmail.com</span>
                  </div>
                  <div class="flex items-center space-x-3 group">
                    <div
                      class="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300"
                    >
                      <div class="w-4 h-4 bg-green-400 rounded"></div>
                    </div>
                    <span class="text-gray-300">+63 992 641 1827</span>
                  </div>
                  <div class="flex items-center space-x-3 group">
                    <div
                      class="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300"
                    >
                      <div class="w-4 h-4 bg-green-400 rounded"></div>
                    </div>
                    <span class="text-gray-300">Legazpi City, PH</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="mt-16 pt-8 border-t border-gray-700/50">
              <div
                class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
              >
                <p class="text-gray-400 text-sm">© 2025 Kyle Arana. All rights reserved.</p>
                <div class="flex space-x-6 text-sm">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >Privacy Policy</a
                  >
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >Terms of Service</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Animated accent line -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"
          ></div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const sections = ref([]);

onMounted(() => {
  sections.value = document.querySelectorAll('section');
  
  sections.value.forEach((section) => {
    useIntersectionObserver(
      section,
      ([{ isIntersecting }]) => {
        section.style.opacity = isIntersecting ? '1' : '0';
        section.style.transform = isIntersecting ? 'translateY(0)' : 'translateY(20px)';
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
  });
});
</script>

<style scoped>
/* Smooth scroll behavior with custom timing */
.snap-y {
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scroll-timeline: --smooth-scroll y;
  animation: auto ease-in-out smooth-scroll both;
  animation-timeline: --smooth-scroll;
  animation-duration: 1.5s; /* Adjust this value to make the scroll slower (e.g., 1.5s, 2s) */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.snap-y::-webkit-scrollbar {
  display: none;
}

/* Section styles */
section {
  min-height: calc(100vh - 4rem);
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  box-sizing: border-box;
  padding: 2rem 0;
  overflow-y: auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
}

/* Content container within sections */
section > div {
  max-height: 100%;
  overflow-y: auto;
  padding: 1rem 0;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem; /* Account for fixed header */
}

/* Custom scroll behavior with slower transitions */
@keyframes smoothScroll {
  from {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  to {
    transform: translateY(-100%);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}

/* Add smooth transition for all scrollable elements */
* {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  scroll-padding-top: 4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}

/* Ensure content doesn't get cut off */
.snap-y > section {
  display: flex;
  flex-direction: column;
}

/* Adjust content spacing */
.snap-y > section > div {
  margin: auto 0;
  width: 100%;
}
/* Additional custom styles if needed */
</style>
