<script>
	import { onMount } from 'svelte';

	let particle_number = 300;
	let update_frequency = 1000 / 60;

	let angle_demul = 500;
	let z_angle_demul = 500;
	let max_radius = 1;
	let min_radius = 0.5;

	onMount(() => {
		// Get canvas.
		let canvas = document.getElementById('sphere');

		// Get canvas context.
		let canvas_ctx = canvas.getContext('2d');

		canvas.width = 410;
		canvas.height = 410;

		let center_x = canvas.width / 2;
		let center_y = canvas.height / 2;

		let max_x = canvas.width / 2 - 2;
		let max_y = canvas.width / 2 - 2;

		let range = max_x > max_y ? max_y : max_x;

		// Generate particles
		let particles = [];

		GenerateParticles(particle_number);

		// OBJECTS
		function Particle() {
			this.angle = Math.random() * 2 * Math.PI;
			this.zangle = Math.random() * 2 * Math.PI;
			this.x;
			this.y;
			this.r = max_radius * Math.random();
			this.color = 'white';

			this.Move = function () {
				this.vangle = Math.random() / angle_demul;
				this.zvelangle = Math.random() / z_angle_demul;
				// Update coordinates
				this.y = center_y + range * Math.cos(this.angle);
				this.x = center_x + range * Math.cos(this.zangle) * Math.sin(this.angle);

				// Update angle
				this.angle += this.vangle;
				this.zangle += this.zvelangle;

				// Change radius on Z axis
				if (Math.sin(this.zangle) > 0.5 && this.r < max_radius) this.r += 0.01;
				else if (this.r > min_radius) this.r -= 0.01;
			};
		}

		// FUNCTIONS
		function UpdateCanvas() {
			ClearBackground();
			UpdateParticles();
		}

		function ClearBackground() {
			canvas_ctx.clearRect(0, 0, canvas.width, canvas.height);
		}

		function UpdateParticles() {
			for (let index in particles) {
				particles[index].Move();
				DrawParticle(particles[index]);
			}
		}

		function DrawParticle(particle) {
			canvas_ctx.beginPath();
			canvas_ctx.fillStyle = particle.color;
			canvas_ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
			canvas_ctx.fill();
		}

		function GenerateParticles(num_particles) {
			for (let i = 0; i < num_particles; i++) {
				particles.push(new Particle());
			}

			setInterval(UpdateCanvas, update_frequency);
		}
	});
</script>

<div class="hero-wrapper">
	<div
		class="hero"
		id="hero"
		on:mousemove={(e) => {
			angle_demul = e.clientX;
			z_angle_demul = e.clientY;
		}}
	>
		<canvas id="sphere">
			<div class="placeholder" />
		</canvas>
	</div>
</div>

<style lang="scss">
	#sphere {
		width: 410px;
		height: 410px;
	}
	.hero-wrapper {
		margin-bottom: let(--spacing-08);
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.hero {
		width: 100vw;
		height: 100vw;
		margin: 0 auto;
		background: radial-gradient(
			closest-side,
			hsla(0, 0%, 0%, 50%) 180px,
			hsla(0, 0%, 4%, 50%) 190px,
			hsla(0, 0%, 20%, 50%) 200px,
			hsla(0, 0%, 40%, 50%) 205px,
			hsla(331, 50%, 90%, 50%) 206px,
			hsla(290, 80%, 80%, 13%) 210px,
			hsla(240, 100%, 50%, 7%) 280px,
			hsla(280, 100%, 50%, 0%) 100%
		);
		padding: calc(50vw - 205px);
		margin: calc((50vw - 205px) * -1);
	}
</style>
