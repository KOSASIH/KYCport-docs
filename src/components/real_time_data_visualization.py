import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd

app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1('Real-time Data Visualization'),
    dcc.Graph(id='live-graph'),
    dcc.Interval(id='interval-component', interval=1000)
])

@app.callback(Output('live-graph', 'figure'),
              [Input('interval-component', 'n_intervals')])
def update_graph(n):
    # Fetch real-time data from API or database
    data = pd.read_csv('https://example.com/data.csv')
    fig = px.line(data, x='timestamp', y='value')
    return fig

if __name__ == '__main__':
    app.run_server()
