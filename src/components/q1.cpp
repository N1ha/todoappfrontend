#include<bits/stdc++.h>

using namespace std;

int main() {

	int n;
	cin>>n;
	vector<int>ans;
	
  for(int i=0;i<n;i++)
  {
	cin>>ans[i];
  }
  unordered_map<int,int>m;
  for(int i=0;i<n;i++)
  {
  	m[ans[i]]++;
  	cout<<"hj";
  }
  for(auto i:m)
  {
  	cout<<i.first<<" "<<i.second<<"times"<<endl;
  }

}
