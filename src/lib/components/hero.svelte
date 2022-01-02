<script>
	import { onMount } from 'svelte';

	var color = true;
	var particle_number = 500;
	var update_frequency = 60 / 500;

	var angle_demul = 500;
	var z_angle_demul = 150;
	var max_radius = 1;
	var min_radius = 0.5;

	onMount(() => {
		// Get canvas.
		var canvas = document.getElementById('sphere');

		// Get canvas context.
		var canvas_ctx = canvas.getContext('2d');

		// Set size.
		canvas.width = 410;
		canvas.height = 410;

		var center_x = canvas.width / 2;
		var center_y = canvas.height / 2;

		var max_x = canvas.width / 2 - 2;
		var max_y = canvas.width / 2 - 2;

		var range = max_x > max_y ? max_y : max_x;

		// Generate particles
		var particles = [];

		GenerateParticles(particle_number);

		// OBJECTS
		function Particle() {
			this.angle = Math.random() * 2 * Math.PI;
			this.vangle = Math.random() / angle_demul;
			this.zangle = Math.random() * 2 * Math.PI;
			this.zvelangle = Math.random() / z_angle_demul;
			this.x;
			this.y;
			this.r = max_radius * Math.random();
			this.color = color ? 'rgb(255,255,255)' : 'white';

			this.Move = function () {
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
			for (var index in particles) {
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
			for (var i = 0; i < num_particles; i++) {
				particles.push(new Particle());
			}

			setInterval(UpdateCanvas, update_frequency);
		}
	});
</script>

<div class="hero-wrapper">
	<div class="hero" id="hero">
		<canvas id="sphere">
			<div class="placeholder" />
		</canvas>
	</div>
</div>

<style lang="scss">
	.hero-wrapper {
		margin-bottom: var(--spacing-08);
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
