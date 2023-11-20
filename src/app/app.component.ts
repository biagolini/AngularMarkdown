import { Component } from '@angular/core';

interface Option {
  text: string;
  originalText?: string;
  isCorrect?: boolean;
  selected?: boolean;
}

interface Question {
  question: string;
  maxChecks: number;
  options: Option[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Markdown';

  constructor() {
    this.questionObj.options.forEach((option) => {
      option.originalText = option.text;
    });
  }

  questionObj: Question = {
    question: `
**Considering the following MongoDB collections, which query correctly finds all documents in the 'users' collection where the age is greater than 25?**

| Collection | Fields       |
|------------|--------------|
| users      | name, age    |
| products   | name, price  |

`,
    maxChecks: 1,
    options: [
      {
        text: '```db.users.find({ age: { $gt: 25 } })```',
        isCorrect: true,
      },
      {
        text: '```db.users.find({ age: > 25 })```',
      },
      { text: "```db.users.query({ 'age > 25' })```" },
      { text: "```db.find('users', { age: { $gt: 25 } })```" },
    ],
  };

  checkSelection(selectedOption: Option) {
    const selectedCount = this.questionObj.options.filter(
      (opt) => opt.selected
    ).length;

    if (this.questionObj.maxChecks === 1) {
      this.questionObj.options.forEach((opt) => {
        if (opt !== selectedOption) {
          opt.selected = false;
        }
      });
    } else if (selectedCount > this.questionObj.maxChecks) {
      const firstSelected = this.questionObj.options.find(
        (opt) => opt.selected && opt !== selectedOption
      );
      if (firstSelected) {
        firstSelected.selected = false;
      }
    }
  }
  isAnyOptionSelected(): boolean {
    return this.questionObj.options.some((option) => option.selected);
  }

  submitAnswers() {
    this.questionObj.options.forEach((option) => {
      if (option.originalText) {
        option.text = option.originalText;
      }

      if (option.selected) {
        option.isCorrect
          ? (option.text = `✔️ ${option.text}`)
          : (option.text = `❌ ${option.text}`);
      }
    });
  }
}
