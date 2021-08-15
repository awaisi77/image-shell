import React, {Component} from "react";
import "react-pro-sidebar/dist/css/styles.css";
import CreateCollectionCard from "../Card/CreateCollectionCard";
import {SideBarCollection} from "../Navbar/SideBarCollection";
import {Dialog} from "primereact/dialog";
import {Toast} from "primereact/toast";
import {FileUpload} from "primereact/fileupload";
import {ProgressBar} from "primereact/progressbar";
import {Tooltip} from "primereact/tooltip";
import {Tag} from "primereact/tag";
import {
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@material-ui/core";
import {Button} from "react-bootstrap";
import {InputSwitch} from "primereact/inputswitch";
import {Divider} from 'primereact/divider';
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {ItemManager} from "../../Managers/ItemManager";
import {Spinner}  from "../Spinner/Spinner";

export default class CreateItem extends React.Component<any, any> {
    toast: any;
    fileUploadRef: any;

    constructor(props: any) {
        super(props);
        const { id } = this.props.match.params;
        this.state = {
            displayDialog: false,
            displayDialogLevel: false,
            displayDialogStats: false,
            name: "",
            description: "",
            externalLink: "",
            properties: [{pKey: "", pValue: ""}],
            levels: [{lKey: "", lValue1: 3, lValue2: 5}],
            stats: [{sKey: "", sValue1: 3, sValue2: 5}],
            sensitiveContent: false,
            collectionId:id,
            formError:{
                nameMissing:true,
                imageMissing:true,
            },
            spinnerLoading:false
        };
        this.onUpload = this.onUpload.bind(this);
        this.onTemplateUpload = this.onTemplateUpload.bind(this);
        this.onTemplateSelect = this.onTemplateSelect.bind(this);
        this.onTemplateRemove = this.onTemplateRemove.bind(this);
        this.onTemplateClear = this.onTemplateClear.bind(this);
        this.headerTemplate = this.headerTemplate.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.emptyTemplate = this.emptyTemplate.bind(this);
    }

    componentDidMount() {
     console.log('state',this.state)
    }

    handleAddLevelClick = () => {
        let levels = this.state.levels;
        levels = [...levels, {lKey: "", lValue1: 3, lValue2: 3}];
        this.setState({levels})
    };

    // handle input change
    handleLevelInputChange = (e: any, index: any) => {
        const {name, value} = e.target;
        let levels = this.state.levels;
        levels[index][name] = value;
        this.setState({levels})
    };

    handleLevelRemoveClick = (index: any) => {
        let levels = this.state.levels;
        levels.splice(index, 1);
        this.setState({levels})
    };

    handleAddStatsClick = () => {
        let stats = this.state.stats;
        stats = [...stats, {sKey: "", sValue1: 3, sValue2: 5}];
        this.setState({stats})
    };

    // handle input change
    handleStatsInputChange = (e: any, index: any) => {
        const {name, value} = e.target;
        let stats = this.state.stats;
        stats[index][name] = value;
        this.setState({stats})
    };

    handleStatsRemoveClick = (index: any) => {
        let stats = this.state.stats;
        stats.splice(index, 1);
        this.setState({stats})
    };

    handleAddPropertyClick = () => {
        let properties = this.state.properties;
        properties = [...properties, {pKey: "", pValue: ""}];
        this.setState({properties})
    };

    // handle input change
    handlePropertyInputChange = (e: any, index: any) => {
        const {name, value} = e.target;
        let properties = this.state.properties;
        properties[index][name] = value;
        this.setState({properties})
    };

    handlePropertyRemoveClick = (index: any) => {
        let properties = this.state.properties;
        properties.splice(index, 1);
        this.setState({properties})
    };

    handleNameChange = (event: any) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    };

    onUpload() {
        this.toast.show({
            severity: "info",
            summary: "Success",
            detail: "File Uploaded",
        });
    }

    onTemplateSelect(e: any) {
        let totalSize = this.state.totalSize;
        e.files.forEach((file: any) => {
            totalSize += file.size;
        });

        this.setState({
            totalSize,
        });
    }

    headerTemplate(options: any) {
        const {className, chooseButton, uploadButton, cancelButton} = options;
        const value = this.state.totalSize / 10000;
        const formatedValue = this.fileUploadRef
            ? this.fileUploadRef.formatSize(this.state.totalSize)
            : "0 B";

        return (
            <div
                className={className}
                style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {chooseButton}
                {uploadButton}
                {cancelButton}
                {/* <ProgressBar
          value={value}
          displayValueTemplate={() => `${formatedValue} / 1 MB`}
          style={{ width: "300px", height: "20px", marginLeft: "auto" }}
        ></ProgressBar> */}
            </div>
        );
    }

    itemTemplate(file: any, props: any) {
        return (
            <div>
                <div
                    style={{
                        textAlign: "center",
                        display: "grid",
                        minHeight: "180px",
                        maxHeight: "300px",
                        maxWidth: "300px",
                    }}
                >
                    <div style={{display: "table-cell", verticalAlign: "middle"}}>
                        <img
                            className="card-img-bottom1"
                            style={{maxHeight: "180px", maxWidth: "286px"}}
                            src={file.objectURL}
                            alt=""
                        />
                    </div>
                </div>
            </div>

        );
    }

    emptyTemplate() {
        return (
            <div
                style={{
                    textAlign: "center",
                    display: "grid",
                    minHeight: "180px",
                    maxHeight: "300px",
                    maxWidth: "300px",
                }}
                // style={{ textAlign: "center" }}
                // className="p-d-flex p-ai-center p-dir-col"
            >
                <i
                    className="pi pi-image p-mt-3 p-p-5"
                    style={{
                        fontSize: "5em",

                        // borderRadius: "50%",
                        // backgroundColor: "var(--surface-b)",
                        color: "var(--surface-d)",
                    }}
                ></i>
                <div
                    style={{fontSize: "15px", color: "var(--text-color-secondary)"}}
                    className="p-my-5"
                >
                    Drag and Drop Image Here
                </div>
            </div>
        );
    }

    onTemplateUpload(e: any) {
        let totalSize = 0;
        e.files.forEach((file: any) => {
            totalSize += file.size || 0;
        });

        this.setState(
            {
                totalSize,
            },
            () => {
                this.toast.show({
                    severity: "info",
                    summary: "Success",
                    detail: "File Uploaded",
                });
            }
        );
    }

    onTemplateRemove(file: any, callback: any) {
        this.setState(
            (prevState: any) => ({
                totalSize: prevState.totalSize - file.size,
            }),
            callback
        );
    }

    onTemplateClear() {
        this.setState({totalSize: 0});
    }

    onHide = (type: any) => {

        if (type === 'properties') {
            this.setState({
                displayDialog: false,
            });
        } else if (type === 'levels') {
            this.setState({
                displayDialogLevel: false,
            });
        } else if (type === 'stats') {
            this.setState({
                displayDialogStats: false,
            });
        }
    };

    renderFooter() {
        return (
            <div>
                {/* <Button
          label="No"
          icon="pi pi-times"
          onClick={() => this.onHide()}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => this.onHide()}
          autoFocus
        /> */}
            </div>
        );
    }

    showDialog = (type: any) => {
        console.log('type', type);
        if (type === 'properties') {
            this.setState({
                displayDialog: true,
            });
        } else if (type === 'levels') {
            this.setState({
                displayDialogLevel: true,
            });
        } else if (type === 'stats') {
            this.setState({
                displayDialogStats: true,
            });
        }

    };

    btnCreateItemClick = async () => {
        console.log('I m clicked')
        let formError = this.state.formError;
        formError.nameMissing = false;
        formError.imageMissing = false;
        this.setState(formError);
        let data = new FormData();
        let isError = false;

        if (!this.fileUploadRef.files || this.fileUploadRef.files.length <= 0) {
            debugger;
            isError = true;
            formError.nameMissing = false;
            this.setState(formError);
        }
        if (this.state.name.length <= 0) {
            isError = true;
            formError.missingName = false;
            this.setState(formError);
        }
        if (isError) return;
        data.append("file", this.fileUploadRef.files[0]);
        this.setState({spinnerLoading:true})
        let res = await ItemManager.uploadImage(data);
        console.log('response',res)
        // let res = { success: true, message: "" };
        if (res.success) {
            let payload = {
                Name: this.state.name,
                Image: "https://ipfs.io/ipfs/"+res.data,
                Description: this.state.description,
                ExternalLink: this.state.externalLink,
                CollectionId:this.state.collectionId,
                Properties: await this.finalizeProperties(),
                Levels:await this.finalizeLevels(),
                Stats:await this.finalizeStats(),
                SensitiveContent: true
            }
            console.log(payload);
        let response = await ItemManager.createItem(payload);
            console.log('response',response);
            this.setState({spinnerLoading:false})
            if (res.success) {
                this.setState(
                    {
                        displayDialog: false,
                        displayDialogLevel: false,
                        displayDialogStats: false,
                        name: "",
                        description: "",
                        externalLink: "",
                        properties: [{pKey: "", pValue: ""}],
                        levels: [{lKey: "", lValue1: 3, lValue2: 5}],
                        stats: [{sKey: "", sValue1: 3, sValue2: 5}],
                        sensitiveContent: false,
                        formError:{
                            nameMissing:true,
                            imageMissing:true,
                        }
                        },
                    () => {
                        this.fileUploadRef.clear();
                        this.showSuccessToast(res.message);
                    }
                );
            }
        } else {
            this.toast.show({
                severity: "error",
                summary: "Error",
                detail: res.message,
            });
        }
        // };

        console.log('state',this.state);
    };
    showSuccessToast = (message: any) => {
        this.toast.show({
            severity: "info",
            summary: "Success",
            detail: message,
            life: 5000,
        });
    };
    finalizeProperties =async ()=>{
      let properties =  this.state.properties;
      let prop:any = [];
      properties.map((x:any)=>{
              if(x.pKey!=="" && x.pValue!=="")
                  prop.push({Name:x.pKey,Value:x.pValue});
          });
    return prop;
    }
    finalizeLevels =async ()=>{
        let levels =  this.state.levels;
        let level:any = [];
        levels.map((x:any)=>{
            if(x.lKey!=="")
                level.push({Name:x.lKey,Value1:x.lValue1,Value2:x.lValue2});
        });
        return level;
    }
    finalizeStats =async ()=>{
        let stats =  this.state.stats;
        let stat:any = [];
        stats.map((x:any)=>{
            if(x.sKey!=="")
                stat.push({Name:x.sKey,Value1:x.sValue1,Value2:x.sValue2});
        });
        return stat;
    }

    render() {
        const chooseOptions = {
            icon: "pi pi-fw pi-images",
            iconOnly: true,
            className: "custom-choose-btn p-button-rounded p-button-outlined",
        };
        const uploadOptions = {
            icon: "pi pi-fw pi-cloud-upload",
            iconOnly: true,
            className:
                "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
        };
        const cancelOptions = {
            icon: "pi pi-fw pi-times",
            iconOnly: true,
            className:
                "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
        };
        return (
            <div>
                <Spinner loading={this.state.spinnerLoading}/>
                <div className="main-custom">
                    <Toast
                        ref={(el) => {
                            this.toast = el;
                        }}
                    ></Toast>
                    <h2>Create New Item</h2>
                    <p><b> Image, Video, Audio, or 3D Model</b></p>
                    <p>
                        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB
                    </p>
                    <div className="row">
                        <div className="col-md-12">
                            <Tooltip
                                target=".custom-choose-btn"
                                content="Choose"
                                position="bottom"
                            />
                            <Tooltip
                                target=".custom-upload-btn"
                                content="Upload"
                                position="bottom"
                            />
                            <Tooltip
                                target=".custom-cancel-btn"
                                content="Clear"
                                position="bottom"
                            />
                            <div>Logo *</div>
                            <div className="col-lg-6">
                                <div
                                    className="card"
                                    style={{width: window.innerWidth > 450 ? "50%" : "unset"}}
                                >
                                    <FileUpload
                                        ref={(el) => (this.fileUploadRef = el)}
                                        name="demo[]"
                                        // url="https://primefaces.org/primereact/showcase/upload.php"
                                        accept="image/*"
                                        maxFileSize={1000000}
                                        // onUpload={this.onTemplateUpload}
                                        // onSelect={this.onTemplateSelect}
                                        onError={this.onTemplateClear}
                                        onClear={this.onTemplateClear}
                                        headerTemplate={this.headerTemplate}
                                        itemTemplate={this.itemTemplate}
                                        emptyTemplate={this.emptyTemplate}
                                        chooseOptions={chooseOptions}
                                        uploadOptions={uploadOptions}
                                        cancelOptions={cancelOptions}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <TextField
                                    id="enter-email"
                                    label="Name *"
                                    variant="outlined"
                                    className="filled-full-width"
                                    //   style={{ margin: 8 }}
                                    //   InputProps={{ style: { fontSize: 20 } }}
                                    placeholder="Name"
                                    //   error={emailError.length > 0 ? true : false}
                                    //   helperText={emailError}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    error={this.state.formError.nameMissing}
                                    helperText={this.state.formError.nameMissing ? "Required Field" : ""}
                                    name="name"
                                    onChange={this.handleNameChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="col-lg-8">
                                <TextField
                                    id="enter-email"
                                    label="External Link *"
                                    variant="outlined"
                                    className="filled-full-width"
                                    //   style={{ margin: 8 }}
                                    //   InputProps={{ style: { fontSize: 20 } }}
                                    placeholder="External Link"
                                    //   error={emailError.length > 0 ? true : false}
                                    //   helperText={emailError}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="externalLink"
                                    onChange={this.handleNameChange}
                                    value={this.state.externalLink}
                                />
                            </div>

                            <div className="col-lg-8">
                                <TextField
                                    id="enter-email"
                                    label="Description"
                                    variant="outlined"
                                    className="filled-full-width"
                                    //   style={{ margin: 8 }}
                                    //   InputProps={{ style: { fontSize: 20 } }}
                                    placeholder="Description"
                                    //   error={emailError.length > 0 ? true : false}
                                    //   helperText={emailError}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    multiline
                                    rows={4}
                                    name="description"
                                    onChange={this.handleNameChange}
                                    value={this.state.description}
                                />
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>Properties</p>
                                        {this.state.properties.map((x: any, i: any) => {
                                            if(x.pKey!=="" && x.Value!=="")
                                            return(
                                                    <Tag style={{margin: "5px"}}>{x.pKey} : {x.pValue} </Tag>
                                                )
                                        })}
                                    </div>
                                    <div className="col-lg-2">
                                        <Button className='btn btn-info'
                                                onClick={() => {
                                                    this.showDialog('properties')
                                                }}
                                        >+</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <Divider/>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>Levels</p>
                                        {this.state.levels.map((x: any, i: any) => {
                                            if(x.lKey!=="")
                                                return(
                                                    <Tag style={{margin: "5px"}}>{x.lKey} : {x.lValue1} : {x.lValue2} </Tag>
                                                )
                                        })}
                                    </div>
                                    <div className="col-lg-2">
                                        <Button className='btn btn-info'
                                                onClick={() => {
                                                    return this.showDialog('levels')
                                                }}
                                        >+</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <Divider/>
                            </div>

                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>Stats</p>
                                        {this.state.stats.map((x: any, i: any) => {
                                            if(x.sKey!=="")
                                                return(
                                                    <Tag style={{margin: "5px"}}>{x.sKey} : {x.sValue1} : {x.sValue2} </Tag>
                                                )
                                        })}
                                    </div>
                                    <div className="col-lg-2">
                                        <Button className='btn btn-info'
                                                onClick={() => {
                                                    return this.showDialog('stats')
                                                }}
                                        >+</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <Divider/>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>
                                            Explicit & Sensitive Content
                                            Set this item as explicit and sensitive content
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <InputSwitch checked={this.state.sensitiveContent} onChange={() => {
                                            let sensitiveContent = this.state.sensitiveContent;
                                            this.setState({
                                                sensitiveContent: !sensitiveContent
                                            });
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center", marginTop: 10}}>
                                <Button style={{width: "160px"}} variant="primary"
                                onClick={this.btnCreateItemClick}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Dialog
                        header="Add Properties"
                        visible={this.state.displayDialog}
                        style={{width: window.innerWidth > 450 ? "40vw" : "unset"}}
                        //   footer={this.renderFooter()}
                        onHide={() => {
                            this.onHide('properties')
                        }}
                    >
                        <p>
                            You can change these values later, along with configuring external
                            URLs, payment options, and trading fees.
                        </p>
                        <div>
                            <Toast
                                ref={(el) => {
                                    this.toast = el;
                                }}
                            ></Toast>
                            {this.state.properties.map((x: any, i: any) => {
                                return (
                                    <div className="box">
                                        <div className="p-col-12 p-md-4">
                                            <div className="p-inputgroup" style={{marginBottom:"10px"}}>
                                                <InputText
                                                    name="pKey"
                                                    placeholder="Enter Key"
                                                    value={x.pKey}
                                                    onChange={e => this.handlePropertyInputChange(e, i)}
                                                />
                                                <InputText
                                                    name="pValue"
                                                    placeholder="Enter Value"
                                                    value={x.pValue}
                                                    onChange={e => this.handlePropertyInputChange(e, i)}
                                                />

                                                {this.state.properties.length !== 1 && <Button
                                                    className="btn btn-danger"
                                                    onClick={() => this.handlePropertyRemoveClick(i)}>X</Button>}
                                                {this.state.properties.length - 1 === i &&
                                                <Button className='btn btn-info'
                                                        onClick={this.handleAddPropertyClick}>+</Button>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    {/*        <div style={{textAlign: "center", marginTop: 10}}>
                                <Button style={{width: "160px"}} variant="primary"
                                        onClick={() => {
                                            alert(JSON.stringify(this.state.properties))
                                          let  properties = this.state.properties;
                                        }}
                                >

                                    Create
                                </Button>
                            </div>*/}
                        </div>
                    </Dialog>

                    <Dialog
                        header="Add Levels"
                        visible={this.state.displayDialogLevel}
                        style={{width: window.innerWidth > 450 ? "40vw" : "unset"}}
                        //   footer={this.renderFooter()}
                        onHide={() => {
                            this.onHide('levels')
                        }}
                    >
                        <p>
                            Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
                        </p>
                        <div>
                            <Toast
                                ref={(el) => {
                                    this.toast = el;
                                }}
                            ></Toast>
                            {this.state.levels.map((x: any, i: any) => {
                                return (
                                    <div className="box">
                                        <div className="col-lg-12">
                                            <div className="p-inputgroup">
                                                <InputText
                                                    name="lKey"
                                                    placeholder="Name"
                                                    value={x.lKey}
                                                    onChange={e => this.handleLevelInputChange(e, i)}
                                                />
                                                    <InputNumber
                                                        name="lValue1"
                                                        placeholder="Enter Value"
                                                        value={x.lValue1}
                                                        type="integer"
                                                        onChange={e => this.handleLevelInputChange(e, i)}
                                                    />
                                                    <InputNumber
                                                        name="lValue2"
                                                        placeholder="Enter Value"
                                                        value={x.lValue2}
                                                        onChange={e => this.handleLevelInputChange(e, i)}
                                                    />
                                                {this.state.levels.length !== 1 && <Button
                                                    className="btn btn-danger"
                                                    onClick={() => this.handleLevelRemoveClick(i)}>X</Button>}
                                                {this.state.levels.length - 1 === i &&
                                                <Button className='btn btn-info'
                                                        onClick={this.handleAddLevelClick}>+</Button>}
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                );
                            })}
                           {/* <div style={{textAlign: "center", marginTop: 10}}>
                                <Button style={{width: "160px"}} variant="primary"
                                        onClick={() => {
                                            alert(JSON.stringify(this.state.properties))
                                        }}
                                >
                                    Create
                                </Button>
                            </div>*/}
                        </div>
                    </Dialog>

                    <Dialog
                        header="Add Stats"
                        visible={this.state.displayDialogStats}
                        style={{width: window.innerWidth > 450 ? "40vw" : "unset"}}
                        //   footer={this.renderFooter()}
                        onHide={() => {
                            this.onHide('stats')
                        }}
                    >
                        <p>
                            Stats show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
                        </p>
                        <div>
                            <Toast
                                ref={(el) => {
                                    this.toast = el;
                                }}
                            ></Toast>
                            {this.state.stats.map((x: any, i: any) => {
                                return (
                                    <div className="box">
                                        <div className="p-col-12 p-md-4">
                                            <div className="p-inputgroup">
                                                <InputText
                                                    name="sKey"
                                                    placeholder="Name"
                                                    value={x.sKey}
                                                    onChange={e => this.handleStatsInputChange(e, i)}
                                                />
                                                <InputNumber
                                                    name="sValue1"
                                                    placeholder="Value"
                                                    value={x.sValue1}
                                                    onChange={e => this.handleStatsInputChange(e, i)}
                                                />
                                                <InputNumber
                                                    name="sValue2"
                                                    placeholder="Value"
                                                    value={x.sValue2}
                                                    onChange={e => this.handleStatsInputChange(e, i)}
                                                />
                                                {this.state.stats.length !== 1 && <Button
                                                    className="btn btn-danger"
                                                    onClick={() => this.handleStatsRemoveClick(i)}>X</Button>}
                                                {this.state.stats.length - 1 === i &&
                                                <Button className='btn btn-info'
                                                        onClick={this.handleAddStatsClick}>+</Button>}
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                           {/* <div style={{textAlign: "center", marginTop: 10}}>
                                <Button style={{width: "160px"}} variant="primary"
                                        onClick={() => {alert(JSON.stringify(this.state.properties))}}>
                                    Create
                                </Button>
                            </div>*/}
                        </div>
                    </Dialog>

                </div>
            </div>
        );
    }
}
