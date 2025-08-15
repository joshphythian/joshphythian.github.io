// document.addEventListener('mousemove', (e) => {
//   const rect = text.getBoundingClientRect();
//   const x = e.clientX - rect.left;   // Mouse X relative to element
//   const y = e.clientY - rect.top;    // Mouse Y relative to element
//   const centerX = rect.width / 2;
//   const centerY = rect.height / 2;

//   // Distance from center (normalized -1 to 1)
//   const moveX = (x - centerX) / centerX;
//   const moveY = (y - centerY) / centerY;

//   // Scale slightly more if near center
//   const distanceFromCenter = Math.sqrt(moveX**2 + moveY**2);
//   const scale = 1 + (0.15 * (1 - distanceFromCenter)); // Max inflate at center

//   // Tilt toward cursor
//   const rotateX = moveY * 10; // up/down tilt
//   const rotateY = -moveX * 10; // left/right tilt

//   text.style.transform = `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });



const emeraldText = document.querySelector('.emerald-text');

emeraldText.addEventListener('click', (e) => {
  // Add jump + inflate
  emeraldText.classList.add('jump-effect');
  setTimeout(() => {
    emeraldText.classList.remove('jump-effect');
  }, 600);

  // 💩 projectile
  const poop = document.createElement('div');
  poop.className = 'poop';
  poop.textContent = '💩';
  poop.style.left = `${e.clientX}px`;
  poop.style.top = `${e.clientY}px`;
  document.body.appendChild(poop);

  poop.addEventListener('animationend', () => {
    poop.remove();
  });
});

    // document.querySelector('.emerald-text').addEventListener('click', function(e) {
    // const poop = document.createElement('div');
    // poop.className = 'poop';
    // poop.textContent = '💩';

    // // Position at mouse click
    // poop.style.left = `${e.clientX}px`;
    // poop.style.top = `${e.clientY}px`;

    // document.body.appendChild(poop);

    // // Remove after animation
    // poop.addEventListener('animationend', () => {
    //     poop.remove();
    // });
    // });
    document.querySelectorAll('#emerald > span').forEach(span => {
    let baseRot = (Math.random() * 30 - 15).toFixed(2) + 'deg';
    let wobbleAmt = (Math.random() * 10 - 5).toFixed(2) + 'deg';
    let duration = (2 + Math.random() * 2).toFixed(2) + 's';
    
    span.style.setProperty('--base-rot', baseRot);
    span.style.setProperty('--wobble-amt', wobbleAmt);
    span.style.animationDuration = duration;
    });
    function spawnRing() {
    const ring = document.createElement('img');

    // Pick one of the two images randomly
    const imgSrc = Math.random() < 0.5 ? 'images/cropped_golden_ring.png' : 'images/cropped_golden_ring2.png';
    ring.src = imgSrc;
    ring.className = 'ring';

    // Random position in viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;

    // Optional random size
    const size = 40 + Math.random() * 80; // 40–120 px
    ring.style.width = `${size}px`;
    ring.style.height = 'auto';

    document.body.appendChild(ring);

    // Remove after animation ends
    setTimeout(() => ring.remove(), 2000);
    }

    // Spawn a new ring every 300ms
    setInterval(spawnRing, 1000);