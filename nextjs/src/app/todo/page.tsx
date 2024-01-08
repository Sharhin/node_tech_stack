"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useSession, signOut } from "next-auth/react"
import { redirect } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { TodoEntry } from './types';
import { TodoListComponent } from "./components/list"
import { requestApi, RequestApiArgsType } from '../components/RequestAPI';

const CreateTodoRequest: RequestApiArgsType = {
  url: '/api/todo',
  method: "POST"
}

const GetTodoRequest: RequestApiArgsType = {
  url: '/api/todo',
  method: "GET"
}

export default function Todo() {
  const { data: session } = useSession();
  const [list, setList] = useState<TodoEntry[]>([])

  const aaa = () => {
    signOut();
  }

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const response = await requestApi(GetTodoRequest)
    const data = await response.json();
    setList(data);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const response = await requestApi(CreateTodoRequest, JSON.stringify(values));
  }

  if (!session?.user)
    redirect('/');

  return (
    <main >
      <>{session?.user ? <><button onClick={aaa}>sign out</button></> : 'no'}</>

      <form onSubmit={onSubmit}>
        <label>
          Title
          <input id="title" name="title" />
        </label>
        <label >
          Description
          <input id="description" name="description" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <TodoListComponent list={list} />

    </main>
  )
} 