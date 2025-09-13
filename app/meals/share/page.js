'use client'
import Imagepicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import BUtton from '@/components/meals/share-meal-button';

export default function ShareMealPage() {
  const[state, formAction] = useFormState(shareMeal, null) // now useActionState is used(renamed)

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {state && <p>{state.message}</p>}
          <Imagepicker label="Choose an image"/>
          <p className={classes.actions}>
            <BUtton />
          </p>
        </form>
      </main>
    </>
  );
}