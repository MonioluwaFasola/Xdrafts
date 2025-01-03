import { useState } from 'react'
import './App.css'
import { Button, Textarea} from '@chakra-ui/react'
import { Theme } from "@chakra-ui/react"

function App() {
  const [value, setValue] = useState('')
  const [drafts, setDrafts] = useState<string[]>([])



  const handleInputChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const saveDraft = () => {
    setDrafts([...drafts, value]) 
    setValue('');
  }


  const clearInput = () => {
    setValue('');
  }

  const deleteDrafts = (index:number) => {
    const tempDrafts = [...drafts]
    if (index > -1) { 
    tempDrafts.splice(index, 1); 
   }

   setDrafts(tempDrafts)

  }



  return (
    <Theme appearance="light">
    <>
    
    <div className='container'>
      <h1>XDrafts</h1>
      <label className='large-label'>Compose New Draft</label>
      <div>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Start typing...'
        size='sm'
      />
      </div>
      <label className='small-label'>Char Count: {value.length}/250</label>
      <div className='input-buttons'>
         <Button style={{backgroundColor: '#E5E5E5'  ,  color: "black"}} onClick={clearInput}>Clear All</Button>
         <Button onClick={saveDraft}>Save Draft</Button>
      </div>

      <h2>Saved Drafts</h2>
      {
        drafts.map( (draftsText, index) => (
          <div className='' key = {index}>
        <div className='yellow'>
        <p>
        {draftsText}
        </p>
        </div>
         
      <div className='input-buttons'>
         <Button style={{backgroundColor: '#EF4444'}} onClick ={ () => deleteDrafts(index)}>Delete</Button>
         <Button>Publish</Button>
      </div>
      </div>
        ))
      } 
      
    </div>
    </>
    </Theme>
    
  )
  
}
 

export default App
