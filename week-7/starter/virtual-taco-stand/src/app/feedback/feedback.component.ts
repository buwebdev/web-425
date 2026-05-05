import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="feedback-form-container">
      <form [formGroup]="feedbackForm" class="feedback-form" (ngSubmit)="leaveFeedback(); feedbackForm.reset();">
        <h1>Complete the form below to leave feedback.</h1>
        <fieldset>
          <legend>Feedback Form</legend>

          <label>Rate our service</label>
          @for(rating of ratings; track rating) {
            <input type="radio" [value]="rating" formControlName="rating"> {{ rating }} <br />
          }

          <label>What did you like about our service?</label>
          <div formArrayName="likes">
            @for(like of likesArray.controls; track like; let i = $index) {
              <input type="checkbox" [formControlName]="i"> {{ likes[i] }} <br />
            }
          </div>

          <label>What you recommend us?</label>
          <select formControlName="recommend">
            @for(option of recommendedOptions; track option) {
              <option [value]="option">{{ option }}</option>
            }
          </select>

          <label>Any additional comments?</label>
          <textarea rows="10" formControlName="comments"></textarea>

          <input type="submit" [disabled]="!feedbackForm.valid" value="Leave Feedback">
        </fieldset>
      </form>

      <div class="feedback">
        <h1>Customer Feedback</h1>
        <div class=feedback-container>
          @for(feedback of preexistingFeedback; track feedback) {
            <div class="feedback-card">
              <h2>Rating: {{ feedback.rating }}</h2>
              <h3>Likes:</h3>
              <ul class="likes-list">
                @for(like of feedback.likes; track like) {
                  <li>{{ like }}</li>
                }
              </ul>
              <h3>Would you recommend us?</h3>
              <p>{{ feedback.recommend }}</p>
              <h3>Comments:</h3>
              <p>{{ feedback.comments }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .feedback-form-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
    }

    .feedback-form, .feedback {
      width: 100%;
      margin-bottom: 20px;
    }

    .feedback-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }

    .feedback-card {
      flex: 0 0 calc(50% - 20px);
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      margin: 10px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .likes-list {
      list-style-type: none;
      padding: 0;
    }

    .likes-list li {
      padding: 5px 0;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    label:first-of-type {
      margin-top: 0;
    }

    label:not(:first-of-type) {
      margin-top: 10px;
    }

    select {
      width: 20%;
      display: block;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      display: block;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
      float: right;
    }

    input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    fieldset {
      margin-bottom: 20px;
    }
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
  })

  constructor(private fb: FormBuilder) {
    this.preexistingFeedback = [
      {
        rating: '5',
        likes: ['Service', 'Quality'],
        recommend: 'Yes',
        comments: 'Everything was perfect, from the service to the quality of the products.'
      },
      {
        rating: '4',
        likes: ['Price'],
        recommend: 'Yes',
        comments: 'Great prices and good service, will definitely recommend to friends.'
      },
      {
        rating: '3',
        likes: ['Ambience'],
        recommend: 'No',
        comments: 'The ambience was nice, but the service could be improved.'
      },
      {
        rating: '2',
        likes: ['Service'],
        recommend: 'No',
        comments: 'The service was slow, and the quality of the food was not up to the mark.'
      },
      {
        rating: '5',
        likes: ['Service', 'Quality', 'Price', 'Ambience'],
        recommend: 'Yes',
        comments: 'Absolutely loved everything! Great value for money and friendly staff.'
      }
    ];
  }

  get likesArray() {
    return this.feedbackForm.get('likes') as FormArray;
  }

  leaveFeedback() {
    // Get the boolean values for each checkbox from the FormArray
    const selectedLikesValues = this.likesArray.value;

    // Map and filter the likes based on the boolean values
    const selectedLikes = this.likes
      .map((like, index) => selectedLikesValues[index] ? like : null)
      .filter(like => like !== null);

    const newFeedback = {
      rating: this.feedbackForm.value.rating,
      likes: selectedLikes,
      recommend: this.feedbackForm.value.recommend,
      comments: this.feedbackForm.value.comments
    };

    // Now, selectedLikes contains the actual items that were selected
    console.log('Selected likes:', selectedLikes);
    console.log('Complete form value:', newFeedback);

    this.preexistingFeedback.push(newFeedback);
    alert("Feedback submitted successfully!")
  }
}
