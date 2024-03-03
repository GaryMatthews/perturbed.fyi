
import { S3Component } from "./Component.js";

class S3Application extends S3Component {
  constructor(options) {
    super(options);
  }
}


export { S3Application, S3Component };


export default S3Application;




let template = `<div class="grid">
			<header>
				<h1 name="header">S3 Test</h1>
				<img src="/">
			</header>
			<main>
				<section class="content">
					<div name="view">UX Main View</div>
				</section>
			</main>

			<aside class="left">
				<section>
					<header>
						<h5>Nav Menu</h5>
					</header>
					<main>
						<section class="content">
							<div>Nav Main</div>
						</section>
					</main>
					<footer>
						<div>Nav Footer</div>
					</footer>
				</section>
				<section>
					<header>
						<h5>Nav Menu</h5>
					</header>
					<main>
						<section class="content">
							<div>Nav Main</div>
						</section>
					</main>
					<footer>
						<div>Nav Footer
						</div>
					</footer>
				</section>
			</aside>

			<aside class="right">
				<section class="content">
					<div name="right">UX Right Sidebar</div>
					</section>
			</aside>
			<footer>
				<div name="footer">UX Footer</div>
			</footer>
		</div>
`;