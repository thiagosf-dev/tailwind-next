'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextType = {
  files: File[]
  id: string
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ files, id, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
