<footer class="footer">
	<nav>
		<img loading="lazy" src="/images/janos-pauer-portrait.webp" alt="Portrait of Janos Pauer" />
		<div>
			<h4>Learn more</h4>
			<a href="/contact">Contact</a>
			<a href="/imprint">Imprint</a>
		</div>
		<div class="tall">
			<h4>Elsewhere</h4>
			<a href="https://de.linkedin.com/in/janospauer" target="_blank">LinkedIn</a>
			<a href="https://www.figma.com/@janos" target="_blank">Figma</a>
			<a href="https://github.com/janospower" target="_blank">GitHub</a>
			<a href="https://www.npmjs.com/~janospower" target="_blank">npm</a>
			<a href="https://twitter.com/janospauer" target="_blank">twitter</a>
			<a href="https://medium.com/@Janosp" target="_blank">Medium</a>
		</div>
		<div>
			<h4>Download</h4>
			<a href="/downloads/Janos_Pauer_Resume.pdf" download>Resume</a>
		</div>
	</nav>
</footer>

<style lang="scss">
	footer {
		margin-top: var(--spacing-10);
		padding-top: var(--spacing-10);
		padding-bottom: var(--spacing-12);
		background-color: var(--color-neutral--800);
	}
	img {
		width: 80px;
		height: 80px;
		clip-path: var(--squircle);
		grid-column: span 2;
	}
	nav {
		grid-row-gap: var(--spacing-05);
	}
	nav div {
		height: fit-content;
	}
	h4 {
		margin-bottom: var(--spacing-02);
	}
	a {
		padding-top: var(--spacing-01);
		padding-bottom: var(--spacing-02);
		display: block;
		transition: padding var(--easing--quint) 250ms;
	}
	// a[target='_blank']:after {
	// 	content: ' ↗︎↖︎⬈➔➜';
	// }
	a:hover {
		padding-left: var(--spacing-02);
	}
	.tall {
		grid-row: span 2;
	}
	@media (min-width: 667px) {
		div,
		img {
			grid-column: span 2;
		}
	}
</style>
