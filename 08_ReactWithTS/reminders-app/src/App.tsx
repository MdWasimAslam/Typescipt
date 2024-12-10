import React from 'react'
import ReminderList from './Components/ReminderList'
import Reminder from './Models/Reminder';
import ReminderService from './Server/Reminder';




const App = () => {
  const [reminders, setReminders] = React.useState<Reminder[]>([]);

  React.useEffect( () => {
        loadReminders()
  }, [])


  const loadReminders = ()=>{
    ReminderService.getReminders().then((response)=>{
      setReminders(response);
      })
  }
  
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App