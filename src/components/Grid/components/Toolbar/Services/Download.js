import { useExcelExport } from "../../../hooks";

const props ={

}

const DownloadWithConfig = ()=>{
  const excelExport = useExcelExport();
  return (
    <div> <button onClick={excelExport}>Download</button> </div>
  )
}

export default function Download(args=props){
  return DownloadWithConfig.bind(this, {...props, ...args})
};