import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    // firebase内にmeetupsテーブルを作成
    // firebaseAPIを使用する際は最後に.jsonを追加する必要あり
    fetch(
      'https://next-js-refresher-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  return (
    <section>
      <h1> Add New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
