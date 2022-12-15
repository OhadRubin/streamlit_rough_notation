import os
import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = True

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.

if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("rough_notation"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "rough_notation",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3001",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("rough_notation", path=build_dir)


# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.
def rough_notation(name, key=None):
    """Create a new instance of "rough_notation".

    Parameters
    ----------
    name: str
        The name of the thing we're saying hello to. The component will display
        the text "Hello, {name}!"
    key: str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.

    Returns
    -------
    int
        The number of times the component's "Click Me" button has been clicked.
        (This is the value passed to `Streamlit.setComponentValue` on the
        frontend.)

    """
    # Call through to our private component function. Arguments we pass here
    # will be sent to the frontend, where they'll be available in an "args"
    # dictionary.
    #
    # "default" is a special argument that specifies the initial return
    # value of the component before the user has interacted with it.
    component_value = _component_func(name=name, key=key, default=-1)

    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value


# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run rough_notation/__init__.py`
# if _RELEASE:
    
# import streamlit as st
# import streamlit.components.v1 as components
# # pip install rough-notation==0.0.1
# from rough_notation import rough_notation
# import streamlit as st
# from datasets import load_dataset
# import numpy as np

# st.set_page_config(layout="wide")

# with st.sidebar:
#   split = st.radio("Pick a split", ["train", "validation", "test"])
# @st.experimental_memo
# def get_data(split):
#   dataset = load_dataset("iohadrubin/wikitext_retro_all")[split]
#   dataset.set_format("numpy")
#   return dataset
# dataset = get_data(split)
# from transformers import AutoTokenizer

# @st.experimental_memo
# def get_tokenizer():
#   return AutoTokenizer.from_pretrained("t5-base") 

# tokenizer = get_tokenizer()

# @st.experimental_memo
# def get_instance(split,index):
#   dataset = get_data(split)
#   input_ids = dataset[index]['input_ids']
#   nei_input_ids = dataset[index]['nei_input_ids']
#   input_ids = input_ids.reshape(-1,64)
  
#   input_text = tokenizer.batch_decode(input_ids)
  
#   return input_text,nei_input_ids
# with st.sidebar:
#   index = st.number_input("Pick an index", min_value=0, max_value=len(dataset)-1, value=0)
# input_text,_ = get_instance(split,index)
# col1, col2 = st.columns([1, 2])
# with col2:
#   current_chunk = rough_notation(input_text, key="foo")

# @st.experimental_memo
# def get_nei_text(split, index, current_chunk):
#   tokenizer = get_tokenizer()
#   _,nei_input_ids = get_instance(split,index)
#   nei_input_ids = nei_input_ids.reshape(-1,3,2*64)
#   nei_text = tokenizer.batch_decode(nei_input_ids[current_chunk])
  
#   return nei_text

# with col1:
#   st.markdown("## Neighbors")
#   for i,text in enumerate(get_nei_text(split, index, current_chunk)):
#     st.markdown(f"### Neighbor {i+1}")
#     st.markdown(text)
#     st.markdown("---")

# import streamlit as st
# import streamlit.components.v1 as components
# # pip install rough-notation==0.0.1
# from rough_notation import rough_notation
# import streamlit as st
# from datasets import load_dataset
# import numpy as np

# st.set_page_config(layout="wide")

# with st.sidebar:
#   split = st.radio("Pick a split", ["train", "validation", "test"])
# @st.experimental_memo
# def get_data(split):
#   dataset = load_dataset("iohadrubin/wikitext_retro_all")[split]
#   dataset.set_format("numpy")
#   return dataset
# dataset = get_data(split)
# from transformers import AutoTokenizer

# @st.experimental_memo
# def get_tokenizer():
#   return AutoTokenizer.from_pretrained("t5-base") 

# tokenizer = get_tokenizer()

# @st.experimental_memo
# def get_instance(split,index):
#   dataset = get_data(split)
#   input_ids = dataset[index]['input_ids']
#   nei_input_ids = dataset[index]['nei_input_ids']
#   input_ids = input_ids.reshape(-1,64)
  
#   input_text = tokenizer.batch_decode(input_ids)
  
#   return input_text,nei_input_ids
# with st.sidebar:
#   index = st.number_input("Pick an index", min_value=0, max_value=len(dataset)-1, value=0)
# input_text,_ = get_instance(split,index)
# col1, col2 = st.columns([1, 2])
# with col2:
#   current_chunk = rough_notation(input_text, key="foo")

# @st.experimental_memo
# def get_nei_text(split, index, current_chunk):
#   tokenizer = get_tokenizer()
#   _,nei_input_ids = get_instance(split,index)
#   nei_input_ids = nei_input_ids.reshape(-1,3,2*64)
#   nei_text = tokenizer.batch_decode(nei_input_ids[current_chunk])
  
#   return nei_text

# with col1:
#   st.markdown("## Neighbors")
#   for i,text in enumerate(get_nei_text(split, index, current_chunk)):
#     st.markdown(f"### Neighbor {i+1}")
#     st.markdown(text)
#     st.markdown("---")