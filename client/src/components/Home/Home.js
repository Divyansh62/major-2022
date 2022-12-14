import React,{ useState, useEffect} from 'react'
import {Container,  Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from '../Pagination';
import {useNavigate,useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import {useDispatch} from 'react-redux';
import {getPosts, getPostsBySearch} from '../../actions/posts';
import useStyles from './styles';


function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const[currentId, setCurrentId]=useState(null);
    const classes= useStyles();
    const dispatch=useDispatch();
    const query=useQuery();
    const navigate=useNavigate();

    const page=query.get('page')||1;
    const searchQuery=query.get('searchQuery');
    
    const [search, setSearch] = useState('');
    const [searchyear,setSearchyear]=useState('');
    const [tags, setTags] = useState([]);
  

    const searchPost=()=>{
      if(search.trim()||searchyear.trim()||tags){
        dispatch(getPostsBySearch({ search,searchyear, tags: tags.join(',') }));
        navigate(`/posts/search?searchQuery=${search ||'none'}&searchYear=${searchyear||'none'}&tags=${tags.join(',')}`);
      }else{
        navigate('/')
      }
    }

    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchPost();
      }
    };
    
    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));


  return (
    <Grow in>
        <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={9}>
        <Posts setCurrentId={setCurrentId} />
        </Grid>

        
        <Grid item xs={12} sm={6} md={3}>
        <AppBar className={classes.appBarSearch} position="static" color="inherit">
        <TextField name='search' variant='outlined' label="Search Moment" onKeyPress={handleKeyPress} fullWidth value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <br></br>
        <TextField name='searchyear' variant='outlined' label="Search For Year" onKeyPress={handleKeyPress} fullWidth value={searchyear} 
        onChange={(e)=>setSearchyear(e.target.value)}/>
        
        <ChipInput 
        style={{margin:'10px 0'}}
        value={tags}
        onAdd={handleAddChip}
        onDelete={handleDeleteChip}
        label="Search Tags"
        variant="outlined"
        />
        <Button onClick={searchPost} className={classes.secondary} variant="contained" color="secondary">Search</Button>
        </AppBar>

        <Form currentId={currentId} setCurrentId={setCurrentId}/>
        {(!searchQuery && !tags.length)&& (
          <Paper elevation={6} className={classes.pagination}>
          <Pagination page={page} />
          </Paper>
        )}
        
        
        </Grid>
        
        </Grid>
        </Container>
        </Grow>
  );
}

export default Home