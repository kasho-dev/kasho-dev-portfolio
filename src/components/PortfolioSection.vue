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
        <li>
          <a href="#about" class="text-green-400 hover:text-green-300 transition-colors">About</a>
        </li>
        <li>
          <a href="#projects" class="text-green-400 hover:text-green-300 transition-colors"
            >Projects</a
          >
        </li>
        <li>
          <a href="#contact" class="text-green-400 hover:text-green-300 transition-colors"
            >Contact</a
          >
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
        id="home"
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

          <a
            href="#projects"
            class="inline-block border-2 border-green-400 text-green-400 px-4 sm:px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-medium text-sm sm:text-base"
          >
            View my work
          </a>
        </div>
      </section>

      <!-- About Section -->
      <section
        id="about"
        class="snap-start min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-auto"
      >
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="flex items-start gap-8 md:gap-12">
            <!-- Profile Image (Left side) -->
            <div class="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/3 lg:w-64">
              <img
                :src="KyleProfileImage"
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
                Hi, I'm <span class="font-semibold text-green-400">Kyle Araña</span>, a passionate
                <span class="font-semibold text-green-400">Front End Web Developer</span> based in
                Legazpi City, Philippines. With a strong foundation in Information Systems and
                hands-on experience in modern web technologies, I specialize in creating efficient,
                user-friendly applications that solve real-world problems. I transform complex
                business requirements into streamlined digital solutions, with expertise spanning
                from crafting intuitive user interfaces with Vue.js and TypeScript to building
                robust full-stack applications using Node.js and modern frameworks.
                <br />
                <br />
                My projects consistently deliver impressive results—I've developed systems that
                reduce manual processing time by up to 90% and improve workflow efficiency by 60%.
                My technical toolkit includes Vue.js, TypeScript, Tailwind CSS, Node.js, C#, .NET,
                and database management, complemented by Oracle certification in Java Foundations
                and specialized training in Systems Administration. I believe in the power of clean
                code, thoughtful design, and collaborative development, always focusing on creating
                solutions that enhance both functionality and user experience.
                <br />
                <br />
                Ready to collaborate on your next project? Let's build something amazing together.
              </p>
              <a
                href="/Kyle_Arana_Resume.pdf"
                download="Kyle_Arana_Resume.pdf"
                class="border-2 border-green-400 text-green-400 px-4 sm:px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-medium text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section
        id="projects"
        class="snap-start min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-auto"
      >
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
          <div class="flex justify-center w-full overflow-x-auto pb-6 px-4">
            <div class="flex gap-8">
              <!-- Projects List -->
              <div
                v-for="project in projects"
                :key="project.id"
                class="group relative flex-shrink-0 w-[350px] cursor-pointer"
                @click="openProject(project)"
              >
                <div class="relative rounded-lg overflow-hidden aspect-[4/3] mb-3">
                  <img
                    :src="project.images[0]"
                    :alt="project.title"
                    class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm object-center"
                  />
                  <div
                    class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span
                      class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                    </span>
                  </div>
                </div>
                <div class="mb-1">
                  <span class="text-green-400 text-sm sm:text-base uppercase tracking-wide">
                    {{ project.techStack[0] }}
                  </span>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold text-white">
                  {{ project.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section
        id="services"
        class="snap-start min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-auto"
      >
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
                  class="w-9 h-9 sm:w-10 sm:h-10 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-monitor-icon lucide-monitor"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Front End Web Development
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                I create modern, responsive web applications using Vue.js, TypeScript, Tailwind CSS,
                and other Front End Web Development technologies. From interactive dashboards to
                complex user interfaces, I focus on delivering seamless user experiences that are
                both visually appealing and highly functional. My frontend solutions are optimized
                for performance and accessibility across all devices.
              </p>
            </div>

            <!-- Service 2 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-9 h-9 sm:w-10 sm:h-10 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-code-icon lucide-code"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="m16 18 6-6-6-6" />
                    <path d="m8 6-6 6 6 6" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Software App Development
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                I build comprehensive desktop and web applications using C#, .NET, ASP.NET Core, and
                modern web technologies. Whether you need a robust business management system or a
                streamlined workflow application, I develop solutions that reduce manual processes
                and improve operational efficiency by up to 90%.
              </p>
            </div>

            <!-- Service 3 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-9 h-9 sm:w-10 sm:h-10 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-file-code-icon lucide-file-code"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M10 12.5 8 15l2 2.5" />
                    <path d="m14 12.5 2 2.5-2 2.5" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Programming Languages
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                I build comprehensive desktop and web applications using C#, .NET, ASP.NET Core, and
                modern web technologies. Whether you need a robust business management system or a
                streamlined workflow application, I develop solutions that reduce manual processes
                and improve operational efficiency by up to 90%.
              </p>
            </div>

            <!-- Service 4 -->
            <div
              class="border-2 border-green-400 rounded-lg p-6 sm:p-8 bg-[#181818] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-9 h-9 sm:w-10 sm:h-10 bg-[#2a2a2a] rounded-full flex-shrink-0 flex items-center justify-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-palette-icon lucide-palette"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
                    />
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    User Interface Development
                  </h3>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                I design and develop intuitive user interfaces using HTML, CSS, JavaScript,
                Bootstrap, and modern frameworks like Alpine.js and Blazor. My UI solutions
                prioritize user experience, creating clean, accessible interfaces that enhance
                productivity and reduce learning curves for end users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Techstack Section -->
      <section
        id="techstack"
        class="snap-start min-h-[calc(100vh-4rem)] flex items-center bg-[#181818] py-16"
      >
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="text-center mb-12">
            <h2 class="text-5xl font-bold text-green-400 mb-12">Techstack</h2>
          </div>

          <!-- Tech Stack Icons - 7x7 Grid -->
          <div class="grid grid-cols-7 gap-9 sm:gap-12">
            <!-- Vue.js -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  d="M32.191 97.953a1.91 1.91 0 00-1.055.316c-.319.211-.611.575-.611 1.041 0 .062-.036.2.084.44l-.031-.076 6.41 20.797c.115.39.39.688.7.86s.648.235.978.235c.7 0 1.47-.334 1.705-1.088v-.002l6.404-20.875v-.076c0 .106.031.045.031-.183 0-.475-.303-.824-.627-1.043a1.966 1.966 0 00-1.101-.346c-.49 0-1.052.297-1.24.863l-.004.006-5.17 17.254-5.19-17.223c-.077-.308-.284-.565-.525-.709s-.504-.191-.758-.191zm51.055 1.072c-1.02 0-1.88.782-1.88 1.76s.846 1.787 1.88 1.787c1.014 0 1.82-.824 1.82-1.787s-.82-1.76-1.82-1.76zm-15.029 6.658c-3.488 0-6.361 2.792-6.361 6.147v3.438c0 1.879.748 3.49 2.02 4.601 1.27 1.112 3.044 1.727 5.077 1.727 1.502 0 2.727-.337 3.602-.793.438-.229.79-.485 1.049-.764.26-.28.45-.585.45-.967 0-.35-.134-.654-.353-.927-.218-.273-.562-.524-1.006-.524-.32 0-.566.135-.779.266-.213.13-.413.275-.654.414-.482.277-1.12.547-2.248.547-1.256 0-2.302-.358-3.024-.96-.72-.6-1.14-1.435-1.14-2.529v-.636h6.435c.687 0 1.45 0 2.11-.42.66-.422 1.06-1.26 1.06-2.533 0-3.53-2.944-6.086-6.238-6.086zm24.186 0c-1.854 0-3.218.6-4.094 1.502-.876.902-1.254 2.076-1.254 3.172 0 1.398.565 2.4 1.373 3.041.809.643 1.815.966 2.772 1.254.957.289 1.873.545 2.488.924.615.38.945.789.945 1.654 0 .465-.14.835-.517 1.137-.378.303-1.05.541-2.143.541-1.293 0-2.016-.319-2.543-.644-.263-.163-.475-.332-.693-.483s-.466-.314-.813-.314c-.417 0-.725.257-.912.523a1.546 1.546 0 00-.295.897c0 .405.198.761.477 1.07.28.309.657.584 1.121.824.927.48 2.204.815 3.72.815 1.647 0 3.001-.402 3.96-1.182.958-.78 1.48-1.939 1.48-3.275 0-1.51-.549-2.595-1.357-3.313-.809-.717-1.83-1.087-2.801-1.385-.971-.297-1.906-.529-2.531-.855-.626-.326-.92-.627-.92-1.32 0-.375.15-.847.531-1.22.381-.371 1.003-.673 2.037-.673.826 0 1.44.19 1.932.39.246.101.46.206.662.294.203.087.39.173.658.173.485 0 .818-.32 1.016-.617.198-.297.312-.59.312-.926 0-.42-.261-.718-.55-.94s-.653-.402-1.073-.556c-.84-.308-1.912-.507-2.988-.507zm-43.857.186c-.811 0-1.512.509-1.512 1.266v8.193c0 3.324 2.826 6.268 6.33 6.268 3.446 0 6.33-2.91 6.33-6.268v-8.223c0-.378-.208-.707-.482-.916-.274-.208-.622-.32-1-.32s-.728.11-1.008.315c-.28.204-.504.53-.504.921v8.223c0 1.742-1.518 3.428-3.336 3.428-1.847 0-3.335-1.716-3.335-3.428v-8.193c0-.393-.215-.695-.48-.91s-.615-.356-1.003-.356zm34.701 0c-.38 0-.73.098-1.01.309-.28.21-.47.558-.47.927v15.096c0 1.133-.08 2.083-.329 2.659-.248.575-.542.83-1.38.83-.741 0-1.36.647-1.36 1.422 0 .321.104.675.367.95s.672.438 1.145.438c1.594 0 2.814-.707 3.54-1.855.728-1.149 1.01-2.685 1.01-4.444v-15.096c0-.393-.224-.735-.51-.937a1.723 1.723 0 00-1.003-.299zm-15.061 2.473c1.991 0 3.336 1.667 3.336 3.365 0 .185-.02.306-.04.361-.018.055-.016.048-.044.067-.055.036-.363.115-.951.115H64.85v-.666c0-1.777 1.485-3.242 3.336-3.242zm9.512 9.37c-1.088 0-1.912.9-1.912 1.942 0 1 .812 1.912 1.912 1.912 1.042 0 1.88-.884 1.88-1.912 0-1.067-.852-1.941-1.88-1.941z"
                  fill="#35495e"
                  style="
                    block-progression: tb;
                    isolation: auto;
                    mix-blend-mode: normal;
                    solid-color: #000;
                    text-decoration-color: #000;
                    text-decoration-line: none;
                    text-decoration-style: solid;
                    text-indent: 0;
                    text-transform: none;
                    white-space: normal;
                  "
                ></path>
                <path
                  fill="none"
                  d="M9.106 0l42.76.136 12.151 20.988L76.396.136 118.893 0 64.142 94.469zm108.912.546L97.124.564 64.123 57.218 31.14.564 9.914.547 64.13 93.086zM96.448.54l-19.51.143-12.91 21.14L51.319.683 31.769.54 64.13 55.841zM31.403.394L51.133.4l12.896 21.407L76.88.403 96.592.398 64.128 56.71"
                ></path>
                <path
                  fill="#35495e"
                  d="M31.404.394L51.133.4l12.896 21.407L76.88.403 96.592.398 64.128 56.71z"
                ></path>
                <path
                  fill="#41b883"
                  d="M9.887.544l21.5-.146 32.722 56.315L96.575.401l21.537.023-54.007 92.684z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Vue.js</p>
            </div>

            <!-- Python -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    fill="#386f9f"
                    d="M51.834 23.017c3.756 0 7.512.058 11.263-.04.995-.026 2.78.797 2.7-1.271-.061-1.683-1.622-1.074-2.568-1.089-4.237-.067-8.488-.228-12.708.037-3.003.187-3.888-.953-3.511-3.707.13-.95.005-1.934.025-2.902.132-6.446 1.69-8.64 7.942-10.23 6.888-1.75 13.937-1.692 20.806-.184 6.175 1.356 8.74 6.16 8.428 10.604-.38 5.423-.086 10.893-.091 16.343-.009 6.853-3.55 10.49-10.459 10.585-5.69.078-11.387.14-17.074-.018-6.778-.19-11.75 5.44-11.784 11.82 0 .484.083.984-.013 1.451-.488 2.343 1.462 6.13-1.022 6.826-3.78 1.062-8.206 1.062-11.54-2.311-1.13-1.14-2.082-2.417-2.584-3.893-2.679-7.865-3.102-15.83-.58-23.818 1.572-4.986 5.848-8.087 11.145-8.176 3.874-.065 7.749-.013 11.623-.013l.002-.014zm6.902-11.12c-.162-1.903-1.185-3.292-3.296-3.35-2.309-.06-3.502 1.336-3.505 3.608-.002 2.106 1.145 3.455 3.241 3.516 2.303.067 3.418-1.36 3.56-3.774z"
                  ></path>
                  <path
                    fill="#ffcf46"
                    d="M80.824 61.572c-4.24 0-8.482-.037-12.722.03-.955.012-2.557-.592-2.607 1.041-.056 1.852 1.663 1.37 2.755 1.381 4.24.053 8.484.098 12.723-.02 2.178-.06 3.067.357 3.23 2.925.737 11.625-4.308 12.63-13.613 14.745-5.338 1.213-11.061.57-16.325-1.788-4.353-1.947-7.024-4.753-6.687-10.007.334-5.186.39-10.439-.009-15.62-.48-6.253 3.41-10.852 10.975-10.854 5.09-.001 10.214-.389 15.26.075 7.215.662 12.872-5.592 13.12-12.864.01-.241-.052-.5.01-.724.636-2.235-1.626-5.557 1.4-6.686 4.573-1.705 9.73.087 12.066 3.557 2.945 4.369 3.343 9.51 3.819 14.53.515 5.411-1.003 10.505-3.276 15.386-1.544 3.31-4.14 4.91-7.757 4.915-4.12.003-8.239 0-12.36 0-.002-.008-.002-.015-.002-.022zm-1.104 10.8c-.453-2.066-1.385-3.476-3.785-3.535-2.496-.06-3.14 1.807-3.127 3.474.014 1.772.508 3.952 3.21 3.748 2.246-.172 3.341-1.563 3.702-3.687z"
                  ></path>
                  <path
                    fill="#386f9f"
                    d="M14.129 114.849c0 2.582.117 5-.055 7.397-.074 1.034 1.066 2.98-1.103 2.978-1.912 0-2.403-1.522-2.342-3.361.117-3.51.034-7.027.034-10.54v-7.998c0-4.82 1.293-6.452 5.903-7.45 4.286-.932 7.654.511 9.386 4.263 1.732 3.753 1.866 7.62.133 11.438-1.708 3.762-4.854 5.166-8.884 4.051-.918-.25-1.845-.467-3.072-.778zm0-9.448c0 1.33.18 2.686-.037 3.98-.502 2.991 1.408 3.728 3.66 4.26 2.227.526 3.754-.421 4.647-2.383 1.501-3.29 1.753-6.683.613-10.162-1.012-3.092-3.349-3.454-6.077-3.07-2.694.383-3.059 2.215-2.824 4.48.1.955.018 1.93.018 2.895zM43.116 114.689c-1.845.48-3.447.992-5.087 1.3-3.59.671-6.248-1.3-7.183-4.894-1.16-4.448-.178-8.879-.148-13.317.013-2.023 1.885-1.234 3.18-2.318 0 4.75.018 8.85-.006 12.947-.013 2.058.519 3.75 2.465 4.835 2.148 1.198 3.91.057 5.78-.712 1.34-.551 1.173-1.676 1.175-2.746.01-3.872-.001-7.74.012-11.612.002-.955-.097-2.122 1.313-2.075 1.257.041 1.804.788 1.783 2.158-.091 6.407.09 12.823-.17 19.221-.197 4.838-3.61 7.793-8.52 8.01-.735.031-1.505.099-1.78-.813-.419-1.404.718-1.139 1.465-1.378 5.401-1.718 6.107-2.744 5.721-8.606zM65.94 98.064c1.429-.675 2.25-1.293 3.153-1.46 5.067-.937 8.95-.58 8.94 6.245-.007 3.515.002 7.031-.007 10.545-.002.984.061 1.942-1.406 2.027-1.547.092-1.887-.793-1.88-2.006.018-3.387.11-6.774.107-10.16-.002-2.63-.539-4.958-3.884-4.95-2.934.005-5.012 2.195-5.027 5.217a899.58 899.58 0 00.003 9.814c.003 1.162.028 2.181-1.652 2.085-1.513-.09-1.327-1.11-1.327-2.049-.01-8.6.032-17.209-.041-25.815-.013-1.508.582-2.444 1.92-2.508 1.888-.087 1.023 1.564 1.051 2.392.123 3.371.05 6.75.05 10.623zM81.93 105.775c-.191-6.715 2.994-10.3 8.76-10.092 2.894.106 5.065 1.39 6.466 3.89 2.475 4.422 2.14 8.846-.538 12.987-1.84 2.844-4.67 4.185-8.12 3.453-3.402-.72-6.066-3.783-6.548-7.353-.128-.945-.02-1.924-.02-2.885zm13.32.157c-.152-1.172-.125-2.806-.613-4.264-.667-2-1.883-3.61-4.364-3.72-2.503-.108-3.752 1.355-4.587 3.38-1.311 3.179-1.226 6.371.194 9.493.912 2.011 2.32 3.483 4.76 3.075 2.403-.401 3.821-1.976 4.312-4.313.223-1.059.187-2.168.298-3.65zM102.257 106.827c0-1.212-.023-2.422.004-3.628.056-2.325-.685-4.901 2.45-6.089 3.59-1.356 7.148-2.372 10.762-.273 1.352.786 1.85 2.214 1.864 3.73.037 4.231-.019 8.464.038 12.695.02 1.476-.368 2.214-2.027 2.174-1.818-.043-1.435-1.283-1.423-2.273.043-3.38.278-6.757.214-10.132-.084-4.25-2.416-5.983-6.389-4.94-1.648.434-2.678 1.234-2.597 3.274.161 3.982.037 7.978.052 11.967.004 1.156.021 2.18-1.647 2.083-1.528-.088-1.278-1.145-1.29-2.062-.028-2.176-.008-4.353-.011-6.526zM58.689 97.403c-.25.296-.46.76-.68.764-3.964.055-2.864 3.014-2.966 5.209-.097 2.045 0 4.1-.029 6.151-.03 2.038.147 3.932 2.627 4.473.711.154 1.035.564.887 1.274-.163.784-.788.753-1.407.745-2.85-.05-4.963-2.065-5.047-5.015-.086-3.014.031-6.035-.04-9.046-.037-1.43.706-3.255-1.6-3.822-.253-.061-.343-.778-.508-1.187 3.076-.965 1.8-3.618 2.222-5.631.2-.953 1.105-1.214 1.96-1.295.865-.082.872.618.9 1.203.114 2.32-1.087 5.425 3.184 5.256.143-.005.31.562.497.92z"
                  ></path>
                </g>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Python</p>
            </div>

            <!-- Java -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#0074BD"
                  d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Java</p>
            </div>

            <!-- HTML -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
                ></path>
                <path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path>
                <path
                  fill="#EBEBEB"
                  d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"
                ></path>
                <path
                  d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">HTML</p>
            </div>

            <!-- CSS -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#131313"
                  d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"
                ></path>
                <path
                  fill="#1572B6"
                  d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"
                ></path>
                <path
                  fill="#fff"
                  d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"
                ></path>
                <path
                  fill="#fff"
                  d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">HTML</p>
            </div>

            <!-- JavaScript -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">HTML</p>
            </div>

            <!-- MySQL -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#00618A"
                  d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977-.004-.191.09-9.422 0-9.516zm0 0"
                ></path>
                <path
                  fill="#E48E00"
                  d="M56.391 91.313h12.195c1.426 0 2.813-.301 3.914-.816 1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914l1.223.055h4.406c.164 0 .324 0 .449.027 1.344.109 1.914.355 2.324.844.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867l1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a7.976 7.976 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082 3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051-3.402.215H84.44a9.23 9.23 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.039.273.082.438.246 1.172 1.348 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.941-.766 1.074-1.363.039-.137.039-.273.039-.41v-9.668c0-.109 0-.246-.039-.383-.246-1.09-1.348-1.715-2.984-1.715h-6.414c-1.879 0-3.105.816-3.105 2.098zm0 0"
                ></path>
                <path
                  fill="#00618A"
                  d="M124.219 67.047c-2.605-.07-4.598.172-6.301.891-.484.203-1.258.207-1.336.813.266.281.309.699.52 1.039.406.66 1.094 1.539 1.707 2l2.074 1.484c1.273.777 2.699 1.223 3.93 2 .723.461 1.441 1.039 2.148 1.559.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516 1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93-1.656-1.41-3.469-2.824-5.336-4.004-1.035-.652-2.312-1.074-3.41-1.629-.367-.187-1.016-.281-1.262-.594-.574-.734-.887-1.664-1.332-2.52l-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707-3.363-5.535-6.988-8.875-12.602-12.156-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113-1.859-1.176-6.629-3.73-8.008-.371-.867 2.121 1.301 4.191 2.078 5.266.543.754 1.242 1.598 1.629 2.445.258.555.301 1.113.52 1.703.539 1.453 1.008 3.031 1.707 4.375.352.68.738 1.395 1.184 2 .273.371.742.539.816 1.113-.457.641-.484 1.633-.742 2.445-1.16 3.652-.723 8.191.965 10.898.516.828 1.734 2.609 3.41 1.926 1.465-.598 1.137-2.445 1.555-4.078.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664-.582-.57-1.227-1.277-1.703-1.93-1.352-1.832-2.547-3.84-3.633-5.93-.52-.996-.973-2.098-1.41-3.113-.168-.391-.164-.984-.516-1.184-.48.742-1.187 1.344-1.559 2.223-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223-.973-2.305-1.152-6.02-.297-8.672.219-.687 1.219-2.852.813-3.484-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633-.398-.871-1.074-1.75-1.629-2.523-.617-.855-1.305-1.484-1.781-2.52-.168-.367-.398-.957-.148-1.336.078-.254.195-.359.445-.441.43-.332 1.629.109 2.074.293 1.191.496 2.184.965 3.191 1.633.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367 1.723.523 3.27 1.34 4.668 2.227 4.273 2.695 7.766 6.535 10.156 11.117.387.738.551 1.441.891 2.223.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406.621.262 1.637.535 2.223.891 1.125.676 2.211 1.48 3.266 2.223.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.26 5.26 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555.074-.07c.461-.324.668-.844.668-1.633-.187-.195-.211-.437-.371-.668-.211-.309-.621-.48-.891-.742zm0 0"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">MySQL</p>
            </div>

            <!-- Tailwind -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#38bdf8"
                  d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
                ></path>
                <path
                  fill="#fff"
                  d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Tailwind</p>
            </div>

            <!-- Bootstrap -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="url(#a)"
                  d="M14.985 15.15c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.563-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94Z"
                ></path>
                <g filter="url(#b)">
                  <path
                    fill="url(#c)"
                    d="M67.11 79.174c11.619 0 18.62-5.689 18.62-15.072 0-7.093-4.995-12.228-12.413-13.041v-.296c5.45-.886 9.726-5.947 9.726-11.6 0-8.053-6.358-13.299-16.047-13.299h-21.8v53.308H67.11ZM53.674 32.627h11.279c6.13 0 9.613 2.733 9.613 7.684 0 5.282-4.05 8.238-11.392 8.238h-9.5V32.627Zm0 39.787V54.866h11.203c8.023 0 12.186 2.955 12.186 8.718s-4.049 8.83-11.694 8.83H53.674Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M67.11 79.174c11.619 0 18.62-5.689 18.62-15.072 0-7.093-4.995-12.228-12.413-13.041v-.296c5.45-.886 9.726-5.947 9.726-11.6 0-8.053-6.358-13.299-16.047-13.299h-21.8v53.308H67.11ZM53.674 32.627h11.279c6.13 0 9.613 2.733 9.613 7.684 0 5.282-4.05 8.238-11.392 8.238h-9.5V32.627Zm0 39.787V54.866h11.203c8.023 0 12.186 2.955 12.186 8.718s-4.049 8.83-11.694 8.83H53.674Z"
                  ></path>
                </g>
                <path
                  fill="#7952B3"
                  d="M11.398 121.43v-17.738h5.047c1.533 0 2.75.375 3.649 1.126.899.75 1.348 1.727 1.348 2.931 0 1.007-.272 1.881-.816 2.623-.545.742-1.295 1.27-2.252 1.583v.05c1.196.14 2.153.593 2.87 1.36.717.759 1.076 1.748 1.076 2.969 0 1.517-.544 2.746-1.632 3.686-1.089.94-2.462 1.41-4.12 1.41h-5.17Zm2.078-15.858v5.727h2.128c1.138 0 2.033-.272 2.684-.816.651-.553.977-1.329.977-2.326 0-1.723-1.134-2.585-3.402-2.585h-2.387Zm0 7.595v6.383h2.82c1.22 0 2.165-.289 2.833-.866.676-.577 1.014-1.369 1.014-2.375 0-2.095-1.427-3.142-4.28-3.142h-2.387Zm17.466 8.563c-1.872 0-3.369-.59-4.49-1.769-1.113-1.187-1.67-2.758-1.67-4.713 0-2.127.581-3.789 1.744-4.985 1.163-1.195 2.734-1.793 4.713-1.793 1.888 0 3.36.581 4.416 1.744 1.063 1.163 1.595 2.775 1.595 4.836 0 2.021-.573 3.641-1.72 4.862-1.137 1.212-2.667 1.818-4.588 1.818Zm.148-11.553c-1.303 0-2.333.445-3.092 1.336-.759.882-1.138 2.102-1.138 3.661 0 1.501.383 2.685 1.15 3.55.767.867 1.793 1.3 3.08 1.3 1.311 0 2.318-.425 3.019-1.275.709-.849 1.063-2.057 1.063-3.624 0-1.583-.354-2.804-1.063-3.662-.701-.857-1.708-1.286-3.019-1.286Zm14.696 11.553c-1.872 0-3.369-.59-4.49-1.769-1.113-1.187-1.67-2.758-1.67-4.713 0-2.127.581-3.789 1.744-4.985 1.163-1.195 2.734-1.793 4.713-1.793 1.888 0 3.36.581 4.416 1.744 1.064 1.163 1.596 2.775 1.596 4.836 0 2.021-.573 3.641-1.72 4.862-1.138 1.212-2.668 1.818-4.59 1.818Zm.148-11.553c-1.303 0-2.333.445-3.092 1.336-.759.882-1.138 2.102-1.138 3.661 0 1.501.383 2.685 1.15 3.55.767.867 1.793 1.3 3.08 1.3 1.311 0 2.318-.425 3.019-1.275.709-.849 1.063-2.057 1.063-3.624 0-1.583-.354-2.804-1.063-3.662-.701-.857-1.708-1.286-3.02-1.286ZM61.21 121.31c-.478.264-1.109.396-1.893.396-2.218 0-3.327-1.237-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.19v1.732h-3.19v7.137c0 .849.144 1.456.433 1.819.288.363.766.544 1.434.544.511 0 .953-.14 1.324-.42v1.731Zm1.942-.34v-2.177c1.105.816 2.321 1.224 3.649 1.224 1.781 0 2.672-.593 2.672-1.78 0-.339-.078-.623-.235-.854a2.138 2.138 0 0 0-.619-.631 4.326 4.326 0 0 0-.915-.482 34.7 34.7 0 0 0-1.126-.458 16.416 16.416 0 0 1-1.484-.668 4.918 4.918 0 0 1-1.064-.767 3.059 3.059 0 0 1-.643-.977c-.14-.363-.21-.787-.21-1.274 0-.593.136-1.117.408-1.571a3.53 3.53 0 0 1 1.088-1.15 5.01 5.01 0 0 1 1.547-.706 6.94 6.94 0 0 1 1.806-.235c1.097 0 2.078.19 2.944.57v2.053c-.932-.611-2.004-.916-3.217-.916-.38 0-.721.045-1.026.136a2.5 2.5 0 0 0-.792.36 1.735 1.735 0 0 0-.507.568 1.493 1.493 0 0 0-.173.718c0 .329.058.605.173.828.123.223.3.421.532.594.23.173.511.33.841.47.33.14.705.293 1.126.458.56.214 1.063.437 1.509.668a4.9 4.9 0 0 1 1.138.767c.313.28.552.606.717.977.173.371.26.812.26 1.323 0 .627-.14 1.171-.42 1.633-.273.462-.64.845-1.102 1.15a5.078 5.078 0 0 1-1.595.681 7.852 7.852 0 0 1-1.893.223c-1.303 0-2.433-.252-3.39-.755h.001Zm17.39.34c-.477.264-1.108.396-1.892.396-2.218 0-3.327-1.237-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.19v1.732h-3.19v7.137c0 .849.144 1.456.433 1.819.288.363.766.544 1.434.544.511 0 .953-.14 1.324-.42v1.731Zm9.316-10.49c-.355-.272-.866-.408-1.534-.408-.866 0-1.592.408-2.177 1.224-.577.817-.866 1.93-.866 3.34v6.457h-2.028v-12.666h2.028v2.61h.05c.289-.891.73-1.583 1.323-2.078.593-.503 1.257-.755 1.992-.755.527 0 .931.058 1.212.174v2.102Zm11.271 10.61H99.1v-1.98h-.05c-.881 1.518-2.18 2.277-3.894 2.277-1.262 0-2.252-.334-2.97-1.002-.709-.668-1.063-1.555-1.063-2.66 0-2.367 1.393-3.743 4.18-4.13l3.798-.533c0-2.152-.87-3.228-2.61-3.228-1.525 0-2.902.519-4.131 1.558v-2.078c1.245-.791 2.68-1.187 4.305-1.187 2.977 0 4.465 1.575 4.465 4.725v8.238Zm-2.03-6.407-3.054.42c-.94.132-1.65.367-2.128.705-.478.33-.717.92-.717 1.769 0 .619.219 1.126.656 1.522.445.387 1.035.58 1.769.58 1.006 0 1.835-.35 2.486-1.05.66-.709.99-1.604.99-2.685l-.001-1.261Zm7.93 4.577h-.05v7.657h-2.028v-18.493h2.029v2.226h.049c.998-1.682 2.458-2.523 4.379-2.523 1.633 0 2.907.569 3.822 1.707.915 1.129 1.373 2.647 1.373 4.552 0 2.119-.515 3.818-1.546 5.096-1.031 1.27-2.441 1.905-4.23 1.905-1.641 0-2.907-.709-3.798-2.128v.001Zm-.05-5.109v1.77c0 1.047.338 1.937 1.015 2.671.685.726 1.55 1.089 2.597 1.089 1.229 0 2.19-.47 2.883-1.41.7-.94 1.05-2.247 1.05-3.922 0-1.41-.325-2.515-.976-3.315-.651-.8-1.534-1.2-2.647-1.2-1.18 0-2.128.412-2.845 1.237-.718.817-1.077 1.843-1.077 3.08Z"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="19.8"
                    x2="129.708"
                    y1="4.704"
                    y2="91.95"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9013FE"></stop>
                    <stop offset="1" stop-color="#6610F2"></stop>
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="49.032"
                    x2="73.598"
                    y1="29.374"
                    y2="70.922"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#F1E5FC"></stop>
                  </linearGradient>
                  <filter
                    id="b"
                    width="48.641"
                    height="61.415"
                    x="41.143"
                    y="22.795"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy=".983"></feOffset>
                    <feGaussianBlur stdDeviation="1.965"></feGaussianBlur>
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2"></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_2"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Bootstrap</p>
            </div>

            <!-- TypeScript -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">TypeScript</p>
            </div>

            <!-- C# -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#9B4F96"
                  d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                ></path>
                <path
                  fill="#68217A"
                  d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                ></path>
                <path
                  fill="#fff"
                  d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                ></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">C#</p>
            </div>

            <!-- Node.js -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#5fa04e"
                  d="M114.313 55.254a.26.26 0 0 0-.145.044l-2.346 1.37a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.368a.262.262 0 0 0 .29 0l2.342-1.368a.308.308 0 0 0 .145-.263V56.93a.303.303 0 0 0-.145-.26l-2.343-1.371a.26.26 0 0 0-.144-.044zM63.22 71.638c-.427 0-.852.104-1.214.308l-11.549 6.727a2.457 2.457 0 0 0-1.214 2.124V94.22c0 .874.462 1.69 1.214 2.128l3.04 1.746c1.476.728 1.997.726 2.662.726 2.17 0 3.415-1.339 3.415-3.64V81.935a.356.356 0 0 0-.348-.351h-1.474a.356.356 0 0 0-.35.351v13.248c0 1.019-1.069 2.04-2.776 1.167l-3.155-1.835c-.116-.058-.175-.206-.175-.322V80.767c0-.116.059-.26.175-.319l11.545-6.697c.087-.058.233-.058.349 0l11.548 6.697c.115.059.172.174.172.32v13.424c0 .145-.057.264-.172.322l-11.548 6.727c-.087.058-.233.058-.349 0l-2.951-1.779c-.087-.058-.203-.087-.29-.029-.81.466-.952.527-1.734.789-.174.058-.463.173.115.493l3.85 2.302c.376.203.78.319 1.214.319.434 0 .867-.115 1.214-.26l11.549-6.727a2.463 2.463 0 0 0 1.214-2.128V80.797c0-.874-.462-1.687-1.214-2.124l-11.549-6.727a2.488 2.488 0 0 0-1.214-.308Zm18.03 6.13a2.236 2.236 0 0 0-2.227 2.243 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.228-1.019 2.228-2.242a2.254 2.254 0 0 0-2.228-2.242zm-.03.379a1.86 1.86 0 0 1 1.883 1.864c0 1.02-.84 1.894-1.882 1.894-1.012 0-1.852-.846-1.852-1.894s.869-1.864 1.852-1.864zm-.809.611v2.562h.494v-1.016h.434c.174 0 .231.058.26.203 0 .03.086.67.086.786h.52c-.058-.116-.087-.466-.116-.67-.028-.32-.056-.553-.404-.582.174-.059.463-.146.463-.612 0-.67-.58-.67-.868-.67zm.435.408h.404c.146 0 .376 0 .376.349 0 .116-.056.351-.376.351h-.405zm-14.47 2.01c-3.3 0-5.268 1.398-5.268 3.757 0 2.534 1.968 3.23 5.123 3.551 3.79.379 4.08.933 4.08 1.69 0 1.31-1.044 1.864-3.475 1.864-3.068 0-3.733-.758-3.965-2.301 0-.175-.142-.29-.316-.29H61.05a.35.35 0 0 0-.346.349c0 1.98 1.041 4.31 6.107 4.31 3.645 0 5.758-1.458 5.758-4.02 0-2.505-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.318-1.63 2.98-1.63 2.373 0 3.269.525 3.617 2.126a.34.34 0 0 0 .319.26h1.533c.088 0 .175-.057.234-.115a.476.476 0 0 0 .085-.263c-.231-2.795-2.053-4.077-5.758-4.077z"
                ></path>
                <path
                  fill="#333"
                  d="M86.072 24.664a.71.71 0 0 0-.352.089.755.755 0 0 0-.375.638V44.32c0 .174-.09.35-.263.466a.549.549 0 0 1-.52 0l-3.066-1.775a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.753 1.279v14.24c0 .524.29 1.02.753 1.282l12.27 7.135a1.486 1.486 0 0 0 1.477 0l12.269-7.135c.463-.262.753-.758.753-1.282V30.168c0-.553-.29-1.05-.753-1.311l-7.32-4.104a.836.836 0 0 0-.373-.089zM13.687 42.43c-.231 0-.462.084-.664.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.102c0 .263.143.525.375.642a.656.656 0 0 0 .724 0l7.294-4.193c.463-.262.75-.758.75-1.282v-8.94c0-.524.29-1.02.754-1.282l3.096-1.805c.231-.146.493-.204.753-.204s.521.058.724.204l3.096 1.805c.463.262.753.758.753 1.282v8.94c0 .524.288 1.02.75 1.282l7.236 4.193a.704.704 0 0 0 .753 0 .724.724 0 0 0 .376-.642V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201Zm100.667.21c-.253 0-.504.066-.736.198l-12.272 7.131c-.463.262-.75.758-.75 1.283v14.24c0 .524.287 1.02.75 1.282l12.184 6.987a1.43 1.43 0 0 0 1.447 0l7.38-4.133a.724.724 0 0 0 .375-.642.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.641v-4.456a.72.72 0 0 1 .375-.64l3.85-2.214a.705.705 0 0 1 .753 0l3.846 2.213a.762.762 0 0 1 .378.641v3.495c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .724-1.283v-3.465c0-.524-.29-1.017-.724-1.28l-12.184-7.104a1.499 1.499 0 0 0-.738-.198zM80.757 53.274c.065 0 .131.015.19.045l4.194 2.446c.116.058.175.202.175.319v4.892c0 .146-.059.264-.175.322l-4.195 2.446a.431.431 0 0 1-.378 0l-4.195-2.446c-.116-.058-.175-.205-.175-.322v-4.892c0-.146.06-.261.175-.32l4.195-2.445a.425.425 0 0 1 .19-.045z"
                ></path>
                <path
                  fill="url(#a)"
                  d="M47.982 42.893a1.484 1.484 0 0 0-1.476 0L34.322 49.97a1.456 1.456 0 0 0-.724 1.281v14.181c0 .525.29 1.02.724 1.282l12.184 7.076a1.484 1.484 0 0 0 1.476 0l12.183-7.076c.463-.262.724-.757.724-1.282V51.251c0-.524-.29-1.02-.724-1.281z"
                ></path>
                <path
                  fill="url(#b)"
                  d="m60.194 49.97-12.241-7.077a1.996 1.996 0 0 0-.376-.145L33.859 66.364c.116.146.26.262.405.35l12.242 7.076c.347.204.752.262 1.128.145l12.879-23.703a.905.905 0 0 0-.319-.262z"
                ></path>
                <path
                  fill="url(#c)"
                  d="M60.194 66.713c.348-.204.608-.553.724-.932l-13.4-23.063c-.346-.058-.723-.029-1.041.175L34.322 49.94l13.11 24.053c.173-.029.376-.087.55-.175z"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="34.513"
                    x2="27.157"
                    y1="15.535"
                    y2="30.448"
                    gradientTransform="translate(0 24.664) scale(1.51263)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3F873F"></stop>
                    <stop offset=".33" stop-color="#3F8B3D"></stop>
                    <stop offset=".637" stop-color="#3E9638"></stop>
                    <stop offset=".934" stop-color="#3DA92E"></stop>
                    <stop offset="1" stop-color="#3DAE2B"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="30.009"
                    x2="50.533"
                    y1="23.359"
                    y2="8.288"
                    gradientTransform="translate(0 24.664) scale(1.51263)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".138" stop-color="#3F873F"></stop>
                    <stop offset=".402" stop-color="#52A044"></stop>
                    <stop offset=".713" stop-color="#64B749"></stop>
                    <stop offset=".908" stop-color="#6ABF4B"></stop>
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="21.917"
                    x2="40.555"
                    y1="22.261"
                    y2="22.261"
                    gradientTransform="translate(0 24.664) scale(1.51263)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".092" stop-color="#6ABF4B"></stop>
                    <stop offset=".287" stop-color="#64B749"></stop>
                    <stop offset=".598" stop-color="#52A044"></stop>
                    <stop offset=".862" stop-color="#3F873F"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Node.js</p>
            </div>

            <!-- Git -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#31251C"
                  d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zm13.332-9.04c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997V56.785c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929H92.563v-.001zm33.857-1.93c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011V55.7c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"
                ></path>
                <path
                  fill="#F34F29"
                  d="M52.7 61.7L29.951 38.952a3.355 3.355 0 00-4.744 0l-4.724 4.724 5.991 5.992a3.983 3.983 0 014.1.956 3.988 3.988 0 01.947 4.125l5.775 5.775a3.988 3.988 0 014.125 6.593 3.992 3.992 0 01-6.516-4.342l-5.386-5.386-.001 14.174a3.992 3.992 0 011.056 6.401 3.993 3.993 0 11-4.339-6.518V57.141a3.99 3.99 0 01-2.167-5.236l-5.906-5.908L2.563 61.595a3.356 3.356 0 000 4.747L25.312 89.09a3.357 3.357 0 004.746 0L52.7 66.446a3.355 3.355 0 000-4.746z"
                ></path>
                <path fill="none" d="M1.58 37.928h124.84v52.143H1.58z"></path>
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">Git</p>
            </div>

            <!-- PocketBase -->
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 25 30">
                <path
                  fill="currentColor"
                  d="M5.684 12a.632.632 0 0 1-.631-.632V4.421c0-.349.282-.632.631-.632h2.37c.46 0 .889.047 1.287.139c.407.084.758.23 1.053.44c.303.202.541.475.715.82c.173.335.26.75.26 1.246c0 .479-.092.894-.273 1.247a2.373 2.373 0 0 1-.715.869a3.11 3.11 0 0 1-1.053.503c-.398.11-.823.164-1.273.164h-.46a.632.632 0 0 0-.632.632v1.52a.632.632 0 0 1-.632.631Zm1.279-4.888c0 .349.283.632.632.632h.343c1.04 0 1.56-.437 1.56-1.31c0-.428-.135-.73-.404-.907c-.26-.176-.645-.264-1.156-.264h-.343a.632.632 0 0 0-.632.631Zm6.3 13.098a.632.632 0 0 1-.631-.631v-6.947a.63.63 0 0 1 .631-.632h2.203c.44 0 .845.034 1.216.1c.38.06.708.169.984.328c.276.16.492.37.647.63c.164.26.246.587.246.982c0 .185-.03.37-.09.554a1.537 1.537 0 0 1-.26.516a1.857 1.857 0 0 1-1.076.7a.031.031 0 0 0-.023.03c0 .015.01.028.025.03c.591.111 1.04.32 1.346.626c.311.31.466.743.466 1.297c0 .42-.082.78-.246 1.083a2.153 2.153 0 0 1-.685.755a3.4 3.4 0 0 1-1.036.441a5.477 5.477 0 0 1-1.268.139zm1.271-5.542c0 .349.283.631.632.631h.21c.465 0 .802-.088 1.009-.264c.207-.176.31-.424.31-.743c0-.302-.107-.516-.323-.642c-.207-.135-.535-.202-.984-.202h-.222a.632.632 0 0 0-.632.632Zm0 3.463c0 .349.283.631.632.631h.39c1.019 0 1.528-.369 1.528-1.108c0-.36-.125-.621-.376-.78c-.241-.16-.625-.24-1.152-.24h-.39a.632.632 0 0 0-.632.632zM1.389 0C.629 0 0 .629 0 1.389V15.03a1.4 1.4 0 0 0 1.389 1.39H8.21a.632.632 0 0 0 .63-.632a.632.632 0 0 0-.63-.63H1.389c-.078 0-.125-.05-.125-.128V1.39c0-.078.047-.125.125-.125H15.03c.078 0 .127.047.127.125v6.82a.632.632 0 0 0 .631.63a.632.632 0 0 0 .633-.63V1.389A1.4 1.4 0 0 0 15.032 0ZM15.79 7.578a.632.632 0 0 0-.632.633a.632.632 0 0 0 .631.63h6.822c.078 0 .125.05.125.128V22.61c0 .078-.047.125-.125.125H8.97c-.077 0-.127-.047-.127-.125v-6.82a.632.632 0 0 0-.631-.63a.632.632 0 0 0-.633.63v6.822A1.4 1.4 0 0 0 8.968 24h13.643c.76 0 1.389-.629 1.389-1.389V8.97a1.4 1.4 0 0 0-1.389-1.39Z"
                />
              </svg>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">PocketBase</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Expertise Section -->
      <section
        id="expertise"
        class="snap-start min-h-[calc(100vh-4rem)] flex items-center bg-[#181818] py-16"
      >
        <div class="w-full px-4 sm:px-8 max-w-6xl mx-auto my-auto">
          <div class="text-center mb-12">
            <h2 class="text-5xl font-bold text-green-400 mb-12">Other expertise</h2>
          </div>

          <!-- Other Expertise Icons - 7x7 Grid -->
          <div class="grid grid-cols-7 gap-4 sm:gap-6">
            <!-- Canva -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <g fill="#00c4cc">
                  <path
                    d="M59.39.152c-.484.051-1.995.23-3.328.387-5.374.613-11.468 2.227-16.816 4.48C19.891 13.106 5.324 30.849 1.305 51.2.359 56.04.129 58.418.129 64c0 7.195.715 12.16 2.61 18.434 6.195 20.53 22.323 36.632 42.906 42.851 6.195 1.871 11.187 2.586 18.355 2.586 7.195 0 12.16-.715 18.434-2.61 20.53-6.195 36.632-22.323 42.851-42.906 1.871-6.195 2.586-11.187 2.586-18.355 0-3.047-.152-6.527-.332-7.809-2.074-14.796-8.168-27.238-18.328-37.402C99.07 8.703 86.68 2.586 72.19.512c-1.996-.282-11.238-.54-12.8-.36zm-20.863 40.32c1.36.41 1.996.794 2.918 1.715 1.793 1.82 2.203 2.817 2.203 5.555 0 2.051-.078 2.434-.691 3.508-1.18 1.996-3.918 3.84-5.812 3.89-1.333.028-1.278-.562.18-2.097 1.945-2.023 2.226-2.79 2.226-5.813-.024-2.917-.383-3.914-1.739-4.734-1.128-.691-2.355-.64-4.148.203-4.66 2.23-9.703 9.653-11.672 17.258-2.613 10.137 2.02 18.25 9.649 16.867 2.226-.41 6.425-2.558 8.246-4.25 1.508-1.379 1.508-1.406 1.66-3.12.336-3.587 2.867-7.169 6.25-8.833 1.558-.77 1.945-.844 4.043-.844 1.996 0 2.457.102 3.43.637 3.097 1.77 2.457 5.89-.895 5.89-1.945 0-2.945-1-1.535-1.534 1.383-.512.867-2.434-.742-2.868-1.895-.488-4.047.793-5.403 3.25-1.64 2.97-1.715 6.504-.156 8.114 1.512 1.613 3.406.336 4.867-3.329.766-1.867 1.867-2.867 3.149-2.867 1.125 0 1.332.692.843 2.793-.718 3.25-.23 4.094 1.793 3.098.664-.309 1.766-1.023 2.43-1.535l1.254-1 .848-4.43c.922-4.965 1.277-5.633 3.172-5.988 1.82-.336 2.23.562 1.562 3.402l-.36 1.59 1.333-1.36c3.148-3.226 7.015-4.812 8.347-3.48.715.715.637 1.613-.386 4.785-.485 1.512-1.153 3.895-1.457 5.25-.461 2.047-.489 2.535-.23 2.868.82.972 3.327-.028 5.554-2.204l1.305-1.277.156-2.844c.152-3.277.457-4.453 1.328-5.504.82-.972 2.305-1.687 3.098-1.484.793.207.793.973.078 3.227-1 3.097-.895 10.238.129 10.238.41 0 2.507-2.2 3.84-4.043l.996-1.36-.793-.816c-1.383-1.46-1.715-2.406-1.715-4.789 0-1.738.129-2.379.562-3.227.719-1.328 1.844-2.3 3.176-2.687 1.406-.434 3.148.281 3.863 1.562.719 1.305.54 4.223-.383 6.223l-.664 1.457h.895c1.23 0 1.715-.305 3.918-2.379 1.152-1.101 2.484-2.05 3.48-2.511 3.918-1.84 8.528-.895 9.293 1.921.64 2.254-.765 3.84-3.226 3.66-1.766-.128-2.098-.59-1.074-1.456 1.843-1.54 0-3.508-2.637-2.793-1.434.386-3.047 1.996-3.89 3.867-1.692 3.738-.794 8.14 1.636 8.14.973 0 2.691-1.921 3.355-3.789.793-2.152 2.457-3.507 3.711-3.02.692.255.743.946.309 3.122-.488 2.383-.563 4.61-.18 5.633.153.382.614 1.101 1.051 1.586.816.921.844 1.254.152 1.691-.332.23-.77.129-1.843-.46-1.485-.77-2.766-2.153-3.227-3.458l-.281-.766-1.024.766c-.59.41-1.511.871-2.047 1.023-2.125.563-4.738-.894-5.964-3.351-.489-.95-.641-3.738-.282-4.813.204-.59.204-.59-.617-.18-.433.231-1.355.485-2.07.563-1.18.13-1.36.258-2.535 1.742-1.664 2.07-4.61 4.864-5.813 5.454-2.558 1.277-3.402.918-4.07-1.72l-.461-1.765-1.102.973c-1.406 1.23-4.222 2.715-5.836 3.074-1.535.332-3.175-.156-3.84-1.18-.995-1.535-.663-4.785.922-9.164 1.176-3.25.333-3.3-2.636-.203-2.203 2.328-3.149 3.992-3.762 6.578-.64 2.688-1.41 3.66-3.148 4.07-1.051.231-1.54-.41-1.332-1.816l.152-1.129-.973.668c-1.383.946-3.125 1.817-4.328 2.149-1.203.332-2.789-.024-3.172-.692-.691-1.175-.691-1.175-1.765-.332-2.332 1.895-5.66 1.356-7.348-1.152l-.54-.793-1.687 1.562c-4.867 4.454-10.957 6.45-15.464 5.067-5.735-1.738-8.907-6.656-8.856-13.746.024-7.117 3.172-14.617 8.473-20.172 2.996-3.125 5.812-4.969 8.68-5.66 2.07-.512 3.328-.485 5.296.129zm0 0"
                  ></path>
                  <path
                    d="M90.418 58.676c-.563.562-.356 2.816.36 4.25.359.742.742 1.332.87 1.332.102 0 .332-.59.512-1.309.64-2.66-.512-5.504-1.742-4.273zm0 0"
                  ></path>
                </g>
              </svg>

              <span class="text-gray-300 text-xs sm:text-sm text-center mt-2">Canva</span>
            </div>

            <!-- Figma -->
            <div class="flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 128 128">
                <path
                  fill="#0acf83"
                  d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                ></path>
                <path
                  fill="#a259ff"
                  d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                ></path>
                <path
                  fill="#f24e1e"
                  d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                ></path>
                <path
                  fill="#ff7262"
                  d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                ></path>
                <path
                  fill="#1abcfe"
                  d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                ></path>
              </svg>

              <span class="text-gray-300 text-xs sm:text-sm text-center mt-2">Figma</span>
            </div>

            <!-- Word -->
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypeWord0"
                    x1="4.494"
                    x2="13.832"
                    y1="-1712.086"
                    y2="-1695.914"
                    gradientTransform="translate(0 1720)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2368c4" />
                    <stop offset=".5" stop-color="#1a5dbe" />
                    <stop offset="1" stop-color="#1146ac" />
                  </linearGradient>
                </defs>
                <path
                  fill="#41a5ee"
                  d="M28.806 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0 0 28.806 3Z"
                />
                <path fill="#2b7cd3" d="M30 9.5H8.512V16l11.069 1.95L30 16Z" />
                <path fill="#185abd" d="M8.512 16v6.5l10.418 1.3L30 22.5V16Z" />
                <path
                  fill="#103f91"
                  d="M9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5H8.512v5.309A1.192 1.192 0 0 0 9.705 29Z"
                />
                <path
                  d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z"
                  opacity=".1"
                />
                <path
                  d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  fill="url(#vscodeIconsFileTypeWord0)"
                  d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
                />
                <path
                  fill="#fff"
                  d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 0 1 .162 1h.022a7.6 7.6 0 0 1 .135-.975l1.039-5.358h1.477l-1.824 7.748h-1.727l-1.237-5.126q-.054-.222-.122-.578t-.084-.52h-.021q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418a4.469 4.469 0 0 1 .079.443Z"
                />
              </svg>
              <span class="text-gray-300 text-xs sm:text-sm text-center mt-2">Word</span>
            </div>

            <!-- Excel -->
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypeExcel0"
                    x1="4.494"
                    x2="13.832"
                    y1="-2092.086"
                    y2="-2075.914"
                    gradientTransform="translate(0 2100)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#18884f" />
                    <stop offset=".5" stop-color="#117e43" />
                    <stop offset="1" stop-color="#0b6631" />
                  </linearGradient>
                </defs>
                <path
                  fill="#185c37"
                  d="M19.581 15.35L8.512 13.4v14.409A1.192 1.192 0 0 0 9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5Z"
                />
                <path
                  fill="#21a366"
                  d="M19.581 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"
                />
                <path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z" />
                <path
                  d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z"
                  opacity=".1"
                />
                <path
                  d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  fill="url(#vscodeIconsFileTypeExcel0)"
                  d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
                />
                <path
                  fill="#fff"
                  d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.355 2.355 0 0 1 9.2 16.8h-.024a1.688 1.688 0 0 1-.168.351l-1.493 2.722Z"
                />
                <path
                  fill="#33c481"
                  d="M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0 0 28.806 3Z"
                />
                <path fill="#107c41" d="M19.581 16H30v6.5H19.581Z" />
              </svg>
              <span class="text-gray-300 text-xs sm:text-sm text-center mt-2">Excel</span>
            </div>

            <!-- PowerPoint -->
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypePowerpoint0"
                    x1="4.494"
                    x2="13.832"
                    y1="-1748.086"
                    y2="-1731.914"
                    gradientTransform="translate(0 1756)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ca4c28" />
                    <stop offset=".5" stop-color="#c5401e" />
                    <stop offset="1" stop-color="#b62f14" />
                  </linearGradient>
                </defs>
                <path
                  fill="#ed6c47"
                  d="M18.93 17.3L16.977 3h-.146A12.9 12.9 0 0 0 3.953 15.854V16Z"
                />
                <path
                  fill="#ff8f6b"
                  d="M17.123 3h-.146v13l6.511 2.6L30 16v-.146A12.9 12.9 0 0 0 17.123 3Z"
                />
                <path
                  fill="#d35230"
                  d="M30 16v.143A12.905 12.905 0 0 1 17.12 29h-.287a12.907 12.907 0 0 1-12.88-12.857V16Z"
                />
                <path
                  d="M17.628 9.389V23.26a1.2 1.2 0 0 1-.742 1.1a1.16 1.16 0 0 1-.45.091H7.027a10.08 10.08 0 0 1-.521-.65a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85a8.82 8.82 0 0 1 .456-.65h9.93a1.2 1.2 0 0 1 1.192 1.189Z"
                  opacity=".1"
                />
                <path
                  d="M16.977 10.04v13.871a1.15 1.15 0 0 1-.091.448a1.2 1.2 0 0 1-1.1.741H7.62q-.309-.314-.593-.65a10.08 10.08 0 0 1-.521-.65a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85h9.735a1.2 1.2 0 0 1 1.192 1.19Z"
                  opacity=".2"
                />
                <path
                  d="M16.977 10.04v12.571a1.2 1.2 0 0 1-1.192 1.189H6.506a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85h9.735a1.2 1.2 0 0 1 1.192 1.19Z"
                  opacity=".2"
                />
                <path
                  d="M16.326 10.04v12.571a1.2 1.2 0 0 1-1.192 1.189H6.506a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85h9.084a1.2 1.2 0 0 1 1.192 1.19Z"
                  opacity=".2"
                />
                <path
                  fill="url(#vscodeIconsFileTypePowerpoint0)"
                  d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
                />
                <path
                  fill="#fff"
                  d="M9.293 12.028a3.287 3.287 0 0 1 2.174.636a2.27 2.27 0 0 1 .756 1.841a2.555 2.555 0 0 1-.373 1.376a2.49 2.49 0 0 1-1.059.935a3.607 3.607 0 0 1-1.591.334H7.687v2.8H6.141v-7.922ZM7.686 15.94h1.331a1.735 1.735 0 0 0 1.177-.351a1.3 1.3 0 0 0 .4-1.025q0-1.309-1.525-1.31H7.686v2.686Z"
                />
              </svg>
              <span class="text-gray-300 text-xs sm:text-sm text-center mt-2">PowerPoint</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Overlay -->
      <ProjectOverlay
        :is-open="isOverlayOpen"
        :project="selectedProject"
        @close="closeProject"
      />

      <!-- Footer -->
      <footer
        id="contact"
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
                  <!--Github-->
                  <a
                    href="https://github.com/kasho-dev"
                    target="_blank"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github-icon lucide-github"
                    >
                      <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                      />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                  </a>

                  <!--LinkedIn-->
                  <a
                    href="https://linkedin.com/in/kyle-arana"
                    target="_blank"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-linkedin-icon lucide-linkedin"
                    >
                      <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                  </a>

                  <!--Facebook-->
                  <a
                    href="https://www.facebook.com/ripkazeo/"
                    target="_blank"
                    class="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-facebook-icon lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
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
                      href="#about"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      href="#projects"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >Projects</a
                    >
                  </li>
                  <li>
                    <a
                      href="#services"
                      class="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact"
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
                  <!--Email-->
                  <div class="flex items-center space-x-3 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-mail-icon lucide-mail"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    <span class="text-gray-300">kyle.arana97@gmail.com</span>
                  </div>

                  <!--Phone Number-->
                  <div class="flex items-center space-x-3 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-phone-icon lucide-phone"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                      />
                    </svg>
                    <span class="text-gray-300">+63 992 641 1827</span>
                  </div>

                  <!--Address-->
                  <div class="flex items-center space-x-3 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-pin-icon lucide-pin"
                    >
                      <path d="M12 17v5" />
                      <path
                        d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                      />
                    </svg>
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
                <p class="text-gray-400 text-sm">2025 Kyle Arana. All rights reserved.</p>
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
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import ProjectOverlay from './ProjectOverlay.vue';
import KyleProfileImage from './icons/Kyle_Arana_Profile.jpg';
import TrackingSystemDashboard from './icons/tracking-system-dashboard.png';
import Presyotect from './icons/Presyotect.png';
import EventraLogin from './icons/eventra-login.png';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Project overlay state
const selectedProject = ref<Project | null>(null);
const isOverlayOpen = ref(false);

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Document Tracking System',
    description: 'A comprehensive document tracking system that streamlines the process of managing, tracking, and monitoring documents throughout their lifecycle. The system provides real-time updates, version control, and detailed audit trails for all document activities.',
    techStack: ['Front End Development', 'Vue.js', 'Node.js', 'PocketBase', 'Tailwind CSS'],
    images: [TrackingSystemDashboard],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Consumer Access Portal',
    description: 'A user-friendly portal that provides consumers with secure access to their accounts, transaction history, and support services. The portal features a responsive design and integrates with various backend services.',
    techStack: ['Front End Development', 'Alpine JS', 'HTML', 'JavaScript', 'Bootstrap 5'],
    images: [Presyotect],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Eventra Catering Order & Expenses Tracker',
    description: 'An all-in-one solution for managing catering orders and tracking expenses. The application helps businesses streamline their operations, manage inventory, and maintain financial records in one place.',
    techStack: ['Software Development', 'C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework'],
    images: [EventraLogin],
    githubUrl: '#',
    liveUrl: '#'
  }
];

const openProject = (project: Project) => {
  selectedProject.value = project;
  isOverlayOpen.value = true;
  // Disable body scroll when overlay is open
  document.body.style.overflow = 'hidden';
};

const closeProject = () => {
  isOverlayOpen.value = false;
  // Re-enable body scroll when overlay is closed
  document.body.style.overflow = '';
};


// Add smooth scrolling to the entire document
const setupSmoothScrolling = () => {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')

  const handleAnchorClick = (e: Event) => {
    const target = e.currentTarget as HTMLAnchorElement
    const targetId = target.getAttribute('href')

    if (!targetId || targetId === '#') return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      e.preventDefault()
      // Temporarily disable smooth scroll for programmatic scroll
      document.documentElement.style.scrollBehavior = 'auto'
      document.body.style.scrollBehavior = 'auto'

      targetElement.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })

      // Re-enable smooth scroll after the jump
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth'
        document.body.style.scrollBehavior = 'smooth'
      }, 100)
    }
  }

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', handleAnchorClick)
  })
}

onMounted(() => {
  setupSmoothScrolling()

  // Add smooth scroll behavior to the entire document
  document.documentElement.style.scrollBehavior = 'smooth'
  document.body.style.scrollBehavior = 'smooth'

  // Add a small delay to ensure the DOM is fully loaded
  setTimeout(() => {
    const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[]
    let lastActiveSection: HTMLElement | null = null

    // First, set up initial styles for all sections
    sections.forEach((section) => {
      if (!(section instanceof HTMLElement)) return;
      // Enable hardware acceleration and prevent layout shifts
      section.style.willChange = 'opacity, transform'
      section.style.backfaceVisibility = 'hidden'
      section.style.perspective = '1000px'
      section.style.transformStyle = 'preserve-3d'

      // Set initial styles with optimized transitions
      section.style.transition =
        'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      section.style.opacity = '0'
      section.style.transform = 'translate3d(0, 30px, 0)'
      section.style.pointerEvents = 'none'
    })

    // Set up intersection observer with optimized settings
    sections.forEach((section) => {
      useIntersectionObserver(
        section,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // Fade out the previously active section
            if (lastActiveSection && lastActiveSection !== section) {
              lastActiveSection.style.opacity = '0.3'
              lastActiveSection.style.transform = 'translate3d(0, 15px, 0)'
              lastActiveSection.style.pointerEvents = 'none'
            }
            // Fade in the current section
            section.style.opacity = '1'
            section.style.transform = 'translate3d(0, 0, 0)'
            section.style.pointerEvents = 'auto'
            lastActiveSection = section
          }
        },
        {
          threshold: 0.15,
          rootMargin: '-10% 0px -10% 0px', // More precise intersection detection
        },
      )
    })

    // Set the first section as active by default
    if (sections[0]) {
      sections[0].style.opacity = '1'
      sections[0].style.transform = 'translate3d(0, 0, 0)'
      sections[0].style.pointerEvents = 'auto'
      lastActiveSection = sections[0]
    }
  }, 100)
})
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
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
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
