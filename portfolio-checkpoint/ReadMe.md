This project allows you to load into the main page and be greeted by an Array of the last 4 logged entries.

You can then navigate to either the 'New Entry' page or the 'Vault' page.
<img width="1902" height="968" alt="Screenshot 2026-09-09 145021" src="https://github.com/user-attachments/assets/3f9879e5-b901-4bcf-a304-731c0b0cd264" />
New Entry: Allows you to add one or multiple entries to the vault array.
<img width="1901" height="973" alt="Screenshot 2026-09-09 145139" src="https://github.com/user-attachments/assets/935fc641-8ca9-481d-874a-d65b0b996158" />
Vault: You can see all entries stored within the Array.
<img width="1910" height="863" alt="Screenshot 2026-09-09 145210" src="https://github.com/user-attachments/assets/a91e100c-ddab-4661-86e9-09ad644b875f" />

The biggest learning curve was the Local Storage. As much as it is given to you in the specification, it is a new and fairly complex concept. I had to read through the document link that was provided a fair bit to make sure I was understanding what my code was actually doing.
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

One of the feedback points was to breakdown how I handled the HOME page displaying the latest results. The brief screenshot displays 4, but the wording said 5, so I copied the screenshot to mirror the actual layout.
I managed to execute this by first taking any 'New Entry' and storing it in an Array. I then pushed this Array to local storage so it could be accessed across multiple pages.
I accessed the array within the HOME page and used the 'Slice' method to capture the latest 4 entries. This was slightly difficult and required a Google as before this, I had only used the stadnard (0,3) syntax, not the (-4) that was required to achieve this.
I also then had to .reverse the Array as it was storing everything in the wrong order.
Initially I had set up a huge overcomplicated amount of code to dynamically create each element. This was split by Row, and each row having a Left and Right element container. It quickly got difficult to understand and hard to read.
I recoded this, with a slightly more optimal flow, where I was relying less on multiple for loops and more on assigning values based on mathematical logic. It was still difficult to read and understand.
I then realised that as the elements are static, I can just map the correct index and entry to the relevant location. So I did this...

<img width="467" height="361" alt="Screenshot 2026-09-10 125120" src="https://github.com/user-attachments/assets/0be3db6f-b120-42f4-8bfa-3b5c1d6bfa2d" />

Funnily enough, I was actually able to reuse some of my older code that was set up to dynamically create elements on the 'Vault' page as it was already looping through. All I had to do was update the Arrays and classes within the Javascript and it was already done.
I copied my code across and it worked first time, which surprised me.

