import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section>
      <p class="w4-eyebrow">Tell us how we did</p>
      <h1>Customer Feedback</h1>
      <p class="w4-page-intro">Your experience helps us make every visit—and every taco—even better.</p>

      <div class="w4-stack w4-stack-lg">
        <form [formGroup]="feedbackForm" class="w4-panel w4-form" (ngSubmit)="leaveFeedback(); feedbackForm.reset()">
          <div class="w4-section-heading">
            <span class="w4-icon-circle" aria-hidden="true">★</span>
            <div>
              <h2>Complete the form below to leave feedback.</h2>
              <p>Required fields are marked with an asterisk.</p>
            </div>
          </div>

          <fieldset>
            <legend>Feedback Form</legend>

            <div class="w4-field">
              <span class="w4-label" id="rating-label">Rate our service *</span>
              <div class="w4-rating" role="radiogroup" aria-labelledby="rating-label">
                @for (rating of ratings; track rating) {
                  <label [for]="'rating-' + rating" class="w4-rating-option">
                    <input type="radio" [id]="'rating-' + rating" [value]="rating" formControlName="rating" />
                    <span>{{ rating }}</span>
                  </label>
                }
              </div>
            </div>

            <div class="w4-field">
              <span class="w4-label" id="likes-label">What did you like about our service?</span>
              <div class="w4-choice-group" formArrayName="likes" aria-labelledby="likes-label">
                @for (like of likesArray.controls; track like; let i = $index) {
                  <label [for]="'like-' + i" class="w4-choice">
                    <input type="checkbox" [id]="'like-' + i" [formControlName]="i" />
                    <span>{{ likes[i] }}</span>
                  </label>
                }
              </div>
            </div>

            <div class="w4-field w4-field-narrow">
              <label for="recommend">Would you recommend us? *</label>
              <select id="recommend" formControlName="recommend">
                <option [ngValue]="null" disabled>Select an option</option>
                @for (option of recommendedOptions; track option) {
                  <option [value]="option">{{ option }}</option>
                }
              </select>
            </div>

            <div class="w4-field">
              <label for="comments">Any additional comments?</label>
              <textarea id="comments" rows="7" formControlName="comments" placeholder="Share a little more about your experience..."></textarea>
            </div>

            <input class="w4-btn w4-btn-primary w4-btn-end" type="submit" [disabled]="!feedbackForm.valid" value="Leave Feedback" />
          </fieldset>
        </form>

        <div>
          <div class="w4-heading-row">
            <div>
              <p class="w4-eyebrow">From our guests</p>
              <h2>What people are saying</h2>
            </div>
            <span class="w4-badge">{{ preexistingFeedback.length }} reviews</span>
          </div>

          <div class="w4-grid w4-grid-2">
            @for (feedback of preexistingFeedback; track feedback) {
              <article class="w4-card w4-review-card">
                <div class="w4-rating-display" [attr.aria-label]="feedback.rating + ' out of 5 stars'">
                  <span aria-hidden="true">★</span>
                  <strong>{{ feedback.rating }} / 5</strong>
                </div>
                <blockquote>“{{ feedback.comments }}”</blockquote>
                <div class="w4-meta-row">
                  <div>
                    <span class="w4-meta-label">Liked</span>
                    <ul class="w4-inline-list">
                      @for (like of feedback.likes; track like) {
                        <li>{{ like }}</li>
                      }
                    </ul>
                  </div>
                  <div>
                    <span class="w4-meta-label">Recommends us</span>
                    <strong>{{ feedback.recommend }}</strong>
                  </div>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeedbackComponent {
  ratings: string[] = ['1', '2', '3', '4', '5'];
  likes: string[] = ['Service', 'Quality', 'Price', 'Ambience', 'Other'];
  recommendedOptions: string[] = ['Yes', 'No'];
  preexistingFeedback: any;

  feedbackForm: FormGroup = this.fb.group({
    rating: [null, Validators.compose([Validators.required])],
    likes: this.fb.array(this.likes.map(() => false)),
    recommend: [null, Validators.compose([Validators.required])],
    comments: [null]
  });

  constructor(private fb: FormBuilder) {
    this.preexistingFeedback = [
      { rating: '5', likes: ['Service', 'Quality'], recommend: 'Yes', comments: 'Everything was perfect, from the service to the quality of the products.' },
      { rating: '4', likes: ['Price'], recommend: 'Yes', comments: 'Great prices and good service, will definitely recommend to friends.' },
      { rating: '3', likes: ['Ambience'], recommend: 'No', comments: 'The ambience was nice, but the service could be improved.' },
      { rating: '2', likes: ['Service'], recommend: 'No', comments: 'The service was slow, and the quality of the food was not up to the mark.' },
      { rating: '5', likes: ['Service', 'Quality', 'Price', 'Ambience'], recommend: 'Yes', comments: 'Absolutely loved everything! Great value for money and friendly staff.' }
    ];
  }

  get likesArray() {
    return this.feedbackForm.get('likes') as FormArray;
  }

  leaveFeedback() {
    const selectedLikesValues = this.likesArray.value;
    const selectedLikes = this.likes
      .map((like, index) => selectedLikesValues[index] ? like : null)
      .filter(like => like !== null);

    this.preexistingFeedback.push({
      rating: this.feedbackForm.value.rating,
      likes: selectedLikes,
      recommend: this.feedbackForm.value.recommend,
      comments: this.feedbackForm.value.comments
    });
    alert('Feedback submitted successfully!');
  }
}
