import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';

export default class Strengths extends Component {
	render() {
		return (
			<article
				id="strengths"
				className={`${this.props.article === 'strengths' ? 'active' : ''} ${
					this.props.articleTimeout ? 'timeout' : ''
				}`}
				style={{ display: 'none' }}
			>
				<h2 className="major">StrengthsFinder</h2>
				<p>
					Clifton{' '}
					<a
						href="https://www.gallupstrengthscenter.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						StrengthsFinder
					</a>{' '}
					is an assessment tool used to maximize both team and personal
					productivity. To learn a little bit more about what makes me "tick,"
					expand my themes below.
				</p>
				<Collapse>
					<Panel
						header={
							<span>
								<i className="far fa-bullseye" /> Focus
							</span>
						}
					>
						<p>
							"Where am I headed?" you ask yourself. You ask this question every
							day. Guided by this theme of Focus, you need a clear destination.
							Lacking one, your life and your work can quickly become
							frustrating. And so each year, each month, and even each week you
							set goals. These goals then serve as your compass, helping you
							determine priorities and make the necessary corrections to get
							back on course. Your Focus is powerful because it forces you to
							filter; you instinctively evaluate whether or not a particular
							action will help you move toward your goal. Those that don’t are
							ignored. In the end, then, your Focus forces you to be efficient.
							Naturally, the flip side of this is that it causes you to become
							impatient with delays, obstacles, and even tangents, no matter how
							intriguing they appear to be. This makes you an extremely valuable
							team member. When others start to wander down other avenues, you
							bring them back to the main road. Your Focus reminds everyone that
							if something is not helping you move toward your destination, then
							it is not important. And if it is not important, then it is not
							worth your time. You keep everyone on point.
						</p>
					</Panel>
					<Panel
						header={
							<span>
								<i
									className="far fa-file-certificate"
									style={{ fontSize: 14 }}
								/>{' '}
								Significance
							</span>
						}
					>
						<p>
							You want to be very significant in the eyes of other people. In
							the truest sense of the word you want to be recognized. You want
							to be heard. You want to stand out. You want to be known. In
							particular, you want to be known and appreciated for the unique
							strengths you bring. You feel a need to be admired as credible,
							professional, and successful. Likewise, you want to associate with
							others who are credible, professional, and successful. And if they
							aren’t, you will push them to achieve until they are. Or you will
							move on. An independent spirit, you want your work to be a way of
							life rather than a job, and in that work you want to be given free
							rein, the leeway to do things your way. Your yearnings feel
							intense to you, and you honor those yearnings. And so your life is
							filled with goals, achievements, or qualifications that you crave.
							Whatever your focus—and each person is distinct—your Significance
							theme will keep pulling you upward, away from the mediocre toward
							the exceptional. It is the theme that keeps you reaching.
						</p>
					</Panel>
					<Panel
						header={
							<span>
								<i className="far fa-terminal" style={{ fontSize: 12 }} />{' '}
								Command
							</span>
						}
					>
						<p>
							Command leads you to take charge. Unlike some people, you feel no
							discomfort with imposing your views on others. On the contrary,
							once your opinion is formed, you need to share it with others.
							Once your goal is set, you feel restless until you have aligned
							others with you. You are not frightened by confrontation; rather,
							you know that confrontation is the first step toward resolution.
							Whereas others may avoid facing up to life’s unpleasantness, you
							feel compelled to present the facts or the truth, no matter how
							unpleasant it may be. You need things to be clear between people
							and challenge them to be clear-eyed and honest. You push them to
							take risks. You may even intimidate them. And while some may
							resent this, labeling you opinionated, they often willingly hand
							you the reins. People are drawn toward those who take a stance and
							ask them to move in a certain direction. Therefore, people will be
							drawn to you. You have presence. You have Command.
						</p>
					</Panel>
					<Panel
						header={
							<span>
								<i className="far fa-shield-check" />
								&nbsp;Achiever
							</span>
						}
					>
						<p>
							Your Achiever theme helps explain your drive. Achiever describes a
							constant need for achievement. You feel as if every day starts at
							zero. By the end of the day you must achieve something tangible in
							order to feel good about yourself. And by “every day” you mean
							every single day—workdays, weekends, vacations. No matter how much
							you may feel you deserve a day of rest, if the day passes without
							some form of achievement, no matter how small, you will feel
							dissatisfied. You have an internal fire burning inside you. It
							pushes you to do more, to achieve more. After each accomplishment
							is reached, the fire dwindles for a moment, but very soon it
							rekindles itself, forcing you toward the next accomplishment. Your
							relentless need for achievement might not be logical. It might not
							even be focused. But it will always be with you. As an Achiever
							you must learn to live with this whisper of discontent. It does
							have its benefits. It brings you the energy you need to work long
							hours without burning out. It is the jolt you can always count on
							to get you started on new tasks, new challenges. It is the power
							supply that causes you to set the pace and define the levels of
							productivity for your work group. It is the theme that keeps you
							moving.
						</p>
					</Panel>
					<Panel
						header={
							<span>
								<i className="far fa-trophy-alt" style={{ fontSize: 13 }} />{' '}
								Competition
							</span>
						}
					>
						<p>
							Competition is rooted in comparison. When you look at the world,
							you are instinctively aware of other people’s performance. Their
							performance is the ultimate yardstick. No matter how hard you
							tried, no matter how worthy your intentions, if you reached your
							goal but did not outperform your peers, the achievement feels
							hollow. Like all competitors, you need other people. You need to
							compare. If you can compare, you can compete, and if you can
							compete, you can win. And when you win, there is no feeling quite
							like it. You like measurement because it facilitates comparisons.
							You like other competitors because they invigorate you. You like
							contests because they must produce a winner. You particularly like
							contests where you know you have the inside track to be the
							winner. Although you are gracious to your fellow competitors and
							even stoic in defeat, you don’t compete for the fun of competing.
							You compete to win. Over time you will come to avoid contests
							where winning seems unlikely.
						</p>
					</Panel>
				</Collapse>
				<p style={{ marginTop: 20, marginBottom: 20, fontSize: 10 }}>
					Strengths and their summaries are © Gallup.
				</p>
				{this.props.close}
			</article>
		);
	}
}
