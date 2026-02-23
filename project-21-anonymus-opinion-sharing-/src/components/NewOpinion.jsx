import { useActionState } from "react";

export function NewOpinion() {

  function shareOpinionAction( prevFormState ,formData){
    const title = formData.get('title');
    const body = formData.get('body');
    const username = formData.get('userName');

    let errors = [];

    if(title.trim().length < 5){
      errors.push('title must be atleast five charaacters long.')
    }

    if(body.trim().length < 10 || body.trim().length > 300){
      errors.push('The opinion must be between 10 to 300 characters long.')
    }

    if(!username.trim()){
      errors.push('Please provide your username.')
    }

    if(errors.length > 0){
      return {errors, enteredValues: {
        title,
        body,
        username
      }}
    }

    //if it makes it past this code that means form is valid, so send to backend

    return { errors: null }

    

  }

  const [formState, formAction] = useActionState(shareOpinionAction, {errors: null});

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.username}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {
              formState.errors.map(
                (error) => (
                  <li key={error}>{error}</li>
              )
              )
            }
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
