(function () {
  const videoRoot = document.querySelector("#video-gallery");
  const videoBase =
    "COSMOS-Networked-ISAC-Enabled-Target-Recognition-Towards-Low-Altitude-Economy/Dynamic_Videos_for_40_Types_of_Low_Altitude_Targets/";
  const targetGroups = [
    {
      category: "UAV",
      note:
        "Size note: The size of a UAV target refers to the approximate length of the diagonal of its body.",
      items: [
        ["DJI Mini 2", "Target40_UAV_01_DJI_Mini_2.mp4", ["Size: 0.2192 m", "Paddles: 4", "Paddle frequency: 80~256 Hz", "3D velocity range: (±10, ±10, ±3) m/s"]],
        ["DJI Mini 4 Pro", "Target40_UAV_02_DJI_Mini_4_Pro.mp4", ["Size: 0.2397 m", "Paddles: 4", "Paddle frequency: 60~100 Hz", "3D velocity range: (±13, ±13, ±6) m/s"]],
        ["DJI Avata", "Target40_UAV_03_DJI_Avata.mp4", ["Size: 0.2048 m", "Paddles: 4", "Paddle frequency: 90~660 Hz", "3D velocity range: (±20, ±20, ±9) m/s"]],
        ["DJI Mavic 3 Pro", "Target40_UAV_04_DJI_Mavic_3_Pro.mp4", ["Size: 0.3815 m", "Paddles: 4", "Paddle frequency: 60~100 Hz", "3D velocity range: (±15, ±15, ±7) m/s"]],
        ["DJI Mavic 4 Pro", "Target40_UAV_05_DJI_Mavic_4_Pro.mp4", ["Size: 0.4198 m", "Paddles: 4", "Paddle frequency: 60~120 Hz", "3D velocity range: (±18, ±18, ±10) m/s"]],
        ["DJI Inspire 2", "Target40_UAV_06_DJI_Inspire_2.mp4", ["Size: 0.6844 m", "Paddles: 4", "Paddle frequency: 30~120 Hz", "3D velocity range: (±20, ±20, ±5) m/s"]],
        ["Type-A Firefighting UAV", "Target40_UAV_07_Type_A_Firefighting_UAV.mp4", ["Size: 2.3118 m", "Paddles: 4", "Paddle frequency: 60~180 Hz", "3D velocity range: (±12, ±12, ±6) m/s"]],
        ["Type-B Firefighting UAV", "Target40_UAV_08_Type_B_Firefighting_UAV.mp4", ["Size: 2.3834 m", "Paddles: 4", "Paddle frequency: 80~180 Hz", "3D velocity range: (±13, ±13, ±10) m/s"]],
        ["DJI Matrice 600 Pro", "Target40_UAV_09_DJI_Matrice_600_Pro.mp4", ["Size: 1.1365 m", "Paddles: 6", "Paddle frequency: 50~120 Hz", "3D velocity range: (±10, ±10, ±5) m/s"]],
        ["EH 216 S", "Target40_UAV_10_EH_216_S.mp4", ["Size: 5.2704 m", "Paddles: 8", "Paddle frequency: 30~60 Hz", "3D velocity range: (±25, ±25, ±2) m/s"]],
      ],
    },
    {
      category: "Bird",
      note:
        "Size note: The size of a bird target refers to the approximate length of its body from head to toe.",
      items: [
        ["Crow", "Target40_Bird_01_Crow.mp4", ["Size: 0.3480 m", "Wings: 2", "Wing frequency: 3~5 Hz", "3D velocity range: (±8, ±8, ±7) m/s"]],
        ["Eagle", "Target40_Bird_02_Eagle.mp4", ["Size: 0.4325 m", "Wings: 2", "Wing frequency: 2~4 Hz", "3D velocity range: (±9, ±9, ±8) m/s"]],
        ["Kingfisher", "Target40_Bird_03_Kingfisher.mp4", ["Size: 0.1519 m", "Wings: 2", "Wing frequency: 6.5~8.5 Hz", "3D velocity range: (±7, ±7, ±6) m/s"]],
        ["Parrot", "Target40_Bird_04_Parrot.mp4", ["Size: 0.2383 m", "Wings: 2", "Wing frequency: 9~11 Hz", "3D velocity range: (±7, ±7, ±6) m/s"]],
        ["Pigeon", "Target40_Bird_05_Pigeon.mp4", ["Size: 0.2196 m", "Wings: 2", "Wing frequency: 4.5~6 Hz", "3D velocity range: (±8, ±8, ±7) m/s"]],
        ["Ramphastidae", "Target40_Bird_06_Ramphastidae.mp4", ["Size: 0.5032 m", "Wings: 2", "Wing frequency: 6~8 Hz", "3D velocity range: (±7, ±7, ±6) m/s"]],
        ["Sparrow", "Target40_Bird_07_Sparrow.mp4", ["Size: 0.1385 m", "Wings: 2", "Wing frequency: 17~19 Hz", "3D velocity range: (±7, ±7, ±6) m/s"]],
        ["Seagull", "Target40_Bird_08_Seagull.mp4", ["Size: 0.3782 m", "Wings: 2", "Wing frequency: 2.5~3.5 Hz", "3D velocity range: (±8, ±8, ±7) m/s"]],
        ["Owl", "Target40_Bird_09_Owl.mp4", ["Size: 0.3843 m", "Wings: 2", "Wing frequency: 3~5 Hz", "3D velocity range: (±7, ±7, ±6) m/s"]],
        ["Wild Goose", "Target40_Bird_10_Wild_Goose.mp4", ["Size: 0.2994 m", "Wings: 2", "Wing frequency: 2~4 Hz", "3D velocity range: (±8, ±8, ±7) m/s"]],
      ],
    },
    {
      category: "Vehicle",
      items: [
        ["AITO M9 2024", "Target40_Vehicle_01_AITO_M9_2024.mp4", ["Size: 5.2 m × 2.0 m × 1.8 m", "Wheel diameter: 0.5588 m", "Forward speed range: 1~20 m/s"]],
        ["Tesla Roadster 2020", "Target40_Vehicle_02_Tesla_Roadster_2020.mp4", ["Size: 3.9 m × 1.7 m × 1.1 m", "Wheel diameter: 0.5080 m", "Forward speed range: 1~20 m/s"]],
        ["Xiaomi SU7 2024", "Target40_Vehicle_03_Xiaomi_SU7_2024.mp4", ["Size: 5.0 m × 2.0 m × 1.4 m", "Wheel diameter: 0.5334 m", "Forward speed range: 1~20 m/s"]],
        ["XPeng G9 2022", "Target40_Vehicle_04_XPeng_G9_2022.mp4", ["Size: 4.9 m × 1.9 m × 1.7 m", "Wheel diameter: 0.5588 m", "Forward speed range: 1~20 m/s"]],
        ["ZEEKR 001 2022", "Target40_Vehicle_05_ZEEKR_001_2022.mp4", ["Size: 5.0 m × 2.0 m × 1.6 m", "Wheel diameter: 0.5334 m", "Forward speed range: 1~20 m/s"]],
        ["Audi A6L 2019", "Target40_Vehicle_06_Audi_A6L_2019.mp4", ["Size: 5.0 m × 1.9 m × 1.5 m", "Wheel diameter: 0.5334 m", "Forward speed range: 1~20 m/s"]],
        ["BYD Song L EV 2024", "Target40_Vehicle_07_BYD_Song_L_EV_2024.mp4", ["Size: 4.8 m × 2.0 m × 1.6 m", "Wheel diameter: 0.5334 m", "Forward speed range: 1~20 m/s"]],
        ["Geely Galaxy L7 2024", "Target40_Vehicle_08_Geely_Galaxy_L7_2024.mp4", ["Size: 4.7 m × 1.9 m × 1.7 m", "Wheel diameter: 0.5588 m", "Forward speed range: 1~20 m/s"]],
        ["Leading Ideal L8 2023", "Target40_Vehicle_09_Leading_Ideal_L8_2023.mp4", ["Size: 5.1 m × 2.0 m × 1.8 m", "Wheel diameter: 0.5588 m", "Forward speed range: 1~20 m/s"]],
        ["NIO ET5T 2023", "Target40_Vehicle_10_NIO_ET5T_2023.mp4", ["Size: 4.8 m × 2.0 m × 1.5 m", "Wheel diameter: 0.4826 m", "Forward speed range: 1~20 m/s"]],
      ],
    },
    {
      category: "Pedestrian",
      items: [
        ["Walking Pedestrian 1", "Target40_Pedestrian_01_Walking_Pedestrian_1.mp4", ["Height: 1.76 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 2", "Target40_Pedestrian_02_Walking_Pedestrian_2.mp4", ["Height: 1.81 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 3", "Target40_Pedestrian_03_Walking_Pedestrian_3.mp4", ["Height: 1.64 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 4", "Target40_Pedestrian_04_Walking_Pedestrian_4.mp4", ["Height: 1.67 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 5", "Target40_Pedestrian_05_Walking_Pedestrian_5.mp4", ["Height: 1.84 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 6", "Target40_Pedestrian_06_Walking_Pedestrian_6.mp4", ["Height: 1.74 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 7", "Target40_Pedestrian_07_Walking_Pedestrian_7.mp4", ["Height: 1.79 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Walking Pedestrian 8", "Target40_Pedestrian_08_Walking_Pedestrian_8.mp4", ["Height: 1.66 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Running Pedestrian 1", "Target40_Pedestrian_09_Running_Pedestrian_1.mp4", ["Height: 1.76 m", "Forward speed range: 0.2~1.5 m/s"]],
        ["Running Pedestrian 2", "Target40_Pedestrian_10_Running_Pedestrian_2.mp4", ["Height: 1.65 m", "Forward speed range: 0.2~1.5 m/s"]],
      ],
    },
  ];

  if (videoRoot) {
    videoRoot.innerHTML = targetGroups
      .map(
        (group) => `
          <section class="target-group" aria-labelledby="group-${group.category}">
            <div class="target-group-header">
              <h3 id="group-${group.category}">${group.category}</h3>
              <span>10 subtypes</span>
            </div>
            <div class="video-grid">
              ${group.items
                .map(
                  ([label, file, details]) => `
                    <article>
                      <video autoplay muted loop playsinline preload="metadata" tabindex="0" aria-label="${group.category}: ${label}">
                        <source src="${videoBase}${file}" type="video/mp4">
                      </video>
                      <h3>${label}</h3>
                      <dl class="target-meta">
                        ${details
                          .map((item) => {
                            const [name, value] = item.split(": ");
                            return `<div><dt>${name}</dt><dd>${value}</dd></div>`;
                          })
                          .join("")}
                      </dl>
                    </article>
                  `
                )
                .join("")}
            </div>
            ${group.note ? `<p class="target-note">${group.note}</p>` : ""}
          </section>
        `
      )
      .join("");
  }

  const videos = Array.from(document.querySelectorAll("video"));

  videos.forEach((video) => {
    video.play().catch(() => {
      video.controls = true;
    });
    video.addEventListener("focus", () => {
      video.controls = true;
    });
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play().catch(() => {
          video.controls = true;
        });
      } else {
        video.pause();
      }
    });
  });

  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }
})();
